import React, { useState, useRef, useEffect, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import { Send, X, MessageCircle, RotateCcw, SquarePen } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { openaiService } from '@/services/openaiService';
import { ragService } from '@/services/ragService';
import knowledgeBase from '@/data/knowledge.json';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  error?: boolean;
}

const STORAGE_KEY = 'jeelson-chat-history';
const TOOLTIP_SESSION_KEY = 'jeelson-chat-tooltip-shown';

const GREEN = '#10B981';
const PANEL_BG = '#0b1220';
const BUBBLE_BG = '#111a2b';
const BORDER = 'rgba(16,185,129,0.25)';

const welcomeMessage = (content: string): ChatMessage => ({
  id: 'welcome',
  role: 'assistant',
  content,
  timestamp: new Date().toISOString(),
});

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ChatMessage[];
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {
      // historique corrompu
    }
    return [welcomeMessage(t('chatbot.welcome'))];
  });
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const lastUserMessageRef = useRef<string | null>(null);
  const userHasScrolledRef = useRef(false);

  // ---------- sessionStorage ----------
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // ignore
    }
  }, [messages]);

  // ---------- Infobulle 8s ----------
  useEffect(() => {
    if (sessionStorage.getItem(TOOLTIP_SESSION_KEY)) return;
    const timer = setTimeout(() => {
      setShowTooltip(true);
      sessionStorage.setItem(TOOLTIP_SESSION_KEY, '1');
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) setShowTooltip(false);
  }, [isOpen]);

  // ---------- Auto-scroll ----------
  const isNearBottom = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return true;
    return el.scrollHeight - el.scrollTop - el.clientHeight < 120;
  }, []);

  const scrollToBottom = useCallback(() => {
    if (!userHasScrolledRef.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'auto', block: 'end' });
    }
  }, []);

  const handleScroll = () => {
    userHasScrolledRef.current = !isNearBottom();
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  // ---------- Body scroll lock (mobile) ----------
  useEffect(() => {
    if (!isOpen) return;
    const isMobile = window.matchMedia('(max-width: 639px)').matches;
    if (isMobile) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // ---------- Focus ----------
  useEffect(() => {
    if (isOpen) {
      textareaRef.current?.focus();
      return;
    }
    if (!isClosing) buttonRef.current?.focus();
  }, [isOpen, isClosing]);

  const closeChat = useCallback(() => {
    if (prefersReducedMotion()) {
      setIsOpen(false);
      return;
    }
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 200);
  }, []);

  // ---------- Focus trap + Escape ----------
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeChat();
        return;
      }
      if (e.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), textarea:not([disabled]), a[href], input:not([disabled])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen, closeChat]);

  const openChat = () => {
    setIsClosing(false);
    setIsOpen(true);
  };

  // ---------- Nouvelle conversation ----------
  const startNewConversation = () => {
    const fresh = [welcomeMessage(t('chatbot.welcome'))];
    setMessages(fresh);
    setShowSuggestions(true);
    lastUserMessageRef.current = null;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
    } catch {
      // ignore
    }
    textareaRef.current?.focus();
  };

  // ---------- Auto-ajustement textarea ----------
  const adjustTextarea = useCallback(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    const lineHeight = 24;
    const maxHeight = lineHeight * 4 + 12;
    el.style.height = `${Math.min(el.scrollHeight, maxHeight)}px`;
  }, []);

  useEffect(() => {
    adjustTextarea();
  }, [inputValue, adjustTextarea]);

  // ---------- Envoi (streaming) ----------
  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isLoading) return;

    if (!openaiService.isConfigured()) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          content: t('chatbot.apiError'),
          timestamp: new Date().toISOString(),
          error: true,
        },
      ]);
      return;
    }

    lastUserMessageRef.current = trimmed;
    setShowSuggestions(false);
    userHasScrolledRef.current = false;

    const userMessage: ChatMessage = {
      id: `u-${Date.now()}`,
      role: 'user',
      content: trimmed,
      timestamp: new Date().toISOString(),
    };
    const assistantId = `a-${Date.now() + 1}`;

    setMessages((prev) => [
      ...prev,
      userMessage,
      { id: assistantId, role: 'assistant', content: '', timestamp: new Date().toISOString() },
    ]);
    setInputValue('');
    setIsLoading(true);

    const conversationHistory = messages
      .filter((m) => !m.error && m.content && m.id !== 'welcome')
      .slice(-10)
      .map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content }));

    try {
      const relevantContext = ragService.getContext(trimmed, knowledgeBase);

      await openaiService.sendMessageStream(
        trimmed,
        relevantContext,
        conversationHistory,
        (fullText) => {
          setMessages((prev) =>
            prev.map((m) => (m.id === assistantId ? { ...m, content: fullText } : m))
          );
        }
      );
    } catch {
      setMessages((prev) => {
        const withoutEmpty = prev.filter((m) => !(m.id === assistantId && !m.content));
        return [
          ...withoutEmpty,
          {
            id: `err-${Date.now()}`,
            role: 'assistant',
            content: t('chatbot.generalError'),
            timestamp: new Date().toISOString(),
            error: true,
          },
        ];
      });
    } finally {
      setIsLoading(false);
      textareaRef.current?.focus();
    }
  };

  const handleSend = () => send(inputValue);

  const handleRetry = () => {
    if (lastUserMessageRef.current && !isLoading) {
      setMessages((prev) => prev.filter((m) => !m.error));
      send(lastUserMessageRef.current);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestions = (t('chatbot.suggestions', { returnObjects: true }) as string[]) || [];

  const formatTime = (iso: string) =>
    new Date(iso).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });

  const panelAnimation = prefersReducedMotion()
    ? ''
    : isClosing
      ? 'animate-[chat-panel-out_200ms_ease-out_forwards]'
      : 'animate-[chat-panel-in_200ms_ease-out_forwards]';

  return (
    <>
      {/* Bouton flottant */}
      <div
        className="fixed z-[60]"
        style={{
          right: '24px',
          bottom: 'calc(24px + env(safe-area-inset-bottom, 0px))',
        }}
      >
        {showTooltip && !isOpen && (
          <div
            className="absolute bottom-full right-0 mb-3 px-3 py-2 text-[13px] whitespace-nowrap shadow-lg"
            style={{
              backgroundColor: BUBBLE_BG,
              color: '#e5e7eb',
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
            }}
            role="tooltip"
          >
            {t('chatbot.tooltip')}
            <span
              className="absolute top-full right-5 w-2 h-2 rotate-45 -mt-1"
              style={{ backgroundColor: BUBBLE_BG, borderRight: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
            />
          </div>
        )}

        <button
          ref={buttonRef}
          onClick={() => (isOpen ? closeChat() : openChat())}
          className="relative flex items-center justify-center text-white shadow-lg transition-[background-color,transform] duration-200 hover:scale-105"
          style={{
            width: 56,
            height: 56,
            backgroundColor: isOpen ? '#059669' : GREEN,
            borderRadius: 16,
          }}
          title={t('chatbot.openChat')}
          aria-label={isOpen ? t('chatbot.closeChat') : t('chatbot.openChat')}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
          {!isOpen && (
            <span
              className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full"
              style={{ backgroundColor: '#22c55e', border: `2px solid ${PANEL_BG}` }}
              aria-hidden="true"
            />
          )}
        </button>
      </div>

      {/* Fenêtre de chat */}
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label={t('chatbot.title')}
          className={`chat-panel-desktop fixed z-[60] flex flex-col overflow-hidden ${panelAnimation}`}
          style={{
            backgroundColor: PANEL_BG,
            border: `1px solid ${BORDER}`,
            borderRadius: 16,
            transformOrigin: 'bottom right',
            inset: 0,
            width: '100%',
            height: '100dvh',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <style>{`
            @media (min-width: 640px) {
              .chat-panel-desktop {
                inset: auto !important;
                right: 24px !important;
                bottom: calc(96px + env(safe-area-inset-bottom, 0px)) !important;
                width: 380px !important;
                height: auto !important;
                max-height: min(640px, calc(100dvh - 120px)) !important;
                border-radius: 16px !important;
              }
            }
            @keyframes chat-panel-in {
              from { opacity: 0; transform: translateY(8px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
            @keyframes chat-panel-out {
              from { opacity: 1; transform: translateY(0) scale(1); }
              to { opacity: 0; transform: translateY(8px) scale(0.95); }
            }
            @media (prefers-reduced-motion: reduce) {
              .chat-panel-desktop, .chat-bot-animated { animation: none !important; }
            }
          `}</style>

          {/* En-tête */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className="w-9 h-9 flex items-center justify-center shrink-0"
                style={{ backgroundColor: 'rgba(16,185,129,0.15)', borderRadius: 12 }}
              >
                <MessageCircle className="w-4 h-4" style={{ color: GREEN }} />
              </div>
              <div className="min-w-0">
                <h3 className="font-semibold text-[15px] text-white leading-tight truncate">
                  {t('chatbot.title')}
                </h3>
                <p className="text-[12px] text-gray-400 flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block shrink-0"
                    style={{ backgroundColor: '#22c55e' }}
                    aria-hidden="true"
                  />
                  {t('chatbot.subtitle')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={startNewConversation}
                className="p-2 rounded-lg transition-colors hover:bg-white/5"
                style={{ borderRadius: 12 }}
                title={t('chatbot.newConversation')}
                aria-label={t('chatbot.newConversation')}
              >
                <SquarePen className="w-4 h-4 text-gray-400" />
              </button>
              <button
                onClick={closeChat}
                className="p-2 rounded-lg transition-colors hover:bg-white/5"
                style={{ borderRadius: 12 }}
                title={t('chatbot.closeChat')}
                aria-label={t('chatbot.closeChat')}
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto p-4 space-y-3"
            style={{ backgroundColor: PANEL_BG }}
            aria-live="polite"
            aria-relevant="additions text"
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className="max-w-[min(88%,22rem)] px-4 py-2.5"
                  style={
                    message.role === 'user'
                      ? { backgroundColor: GREEN, color: '#ffffff', borderRadius: 16 }
                      : {
                          backgroundColor: BUBBLE_BG,
                          color: '#e5e7eb',
                          borderRadius: 16,
                          border: message.error
                            ? '1px solid rgba(239,68,68,0.35)'
                            : '1px solid rgba(255,255,255,0.04)',
                        }
                  }
                >
                  {message.role === 'user' ? (
                    <p
                      className="break-words whitespace-pre-wrap"
                      style={{ fontSize: 15, lineHeight: 1.5, fontWeight: 500 }}
                    >
                      {message.content}
                    </p>
                  ) : message.error ? (
                    <div className="flex flex-col gap-2" style={{ fontSize: 15, lineHeight: 1.5 }}>
                      <p>{message.content}</p>
                      <button
                        onClick={handleRetry}
                        disabled={isLoading}
                        className="self-start flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium transition-colors disabled:opacity-50"
                        style={{
                          backgroundColor: 'rgba(16,185,129,0.12)',
                          color: GREEN,
                          borderRadius: 10,
                          border: `1px solid ${BORDER}`,
                        }}
                        aria-label={t('chatbot.retry')}
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        {t('chatbot.retry')}
                      </button>
                    </div>
                  ) : (
                    <div
                      className="break-words [&_a]:underline [&_a]:underline-offset-2 [&_ul]:pl-4 [&_ul]:my-1 [&_ol]:pl-4 [&_ol]:my-1 [&_li]:my-0 [&_p]:my-1 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0 [&_code]:px-1 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[13px]"
                      style={{ fontSize: 15, lineHeight: 1.5 }}
                    >
                      <ReactMarkdown
                        components={{
                          a: ({ node: _node, ...props }) => (
                            <a
                              {...props}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: GREEN }}
                            />
                          ),
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    </div>
                  )}
                  <span
                    className="block mt-1"
                    style={{ fontSize: 12, lineHeight: 1.4, opacity: 0.45 }}
                  >
                    {formatTime(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}

            {/* 3 points animés */}
            {isLoading && (
              <div className="flex justify-start">
                <div
                  className="px-4 py-3 flex items-center gap-1.5"
                  style={{
                    backgroundColor: BUBBLE_BG,
                    borderRadius: 16,
                    border: '1px solid rgba(255,255,255,0.04)',
                  }}
                  aria-label={t('chatbot.thinking')}
                >
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full chat-bot-animated"
                      style={{
                        backgroundColor: GREEN,
                        animation: prefersReducedMotion()
                          ? 'none'
                          : 'chat-dot 1.2s ease-in-out infinite',
                        animationDelay: `${i * 0.18}s`,
                        opacity: prefersReducedMotion() ? 0.7 : undefined,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {showSuggestions && !isLoading && (
              <div className="flex flex-wrap gap-2 pt-1">
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => send(suggestion)}
                    className="px-3 py-1.5 text-[13px] transition-colors"
                    style={{
                      backgroundColor: 'rgba(16,185,129,0.10)',
                      color: '#e5e7eb',
                      borderRadius: 12,
                      border: `1px solid ${BORDER}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(16,185,129,0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(16,185,129,0.10)';
                    }}
                    aria-label={suggestion}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Saisie */}
          <div
            className="p-3 shrink-0"
            style={{
              borderTop: `1px solid ${BORDER}`,
              backgroundColor: PANEL_BG,
              paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))',
            }}
          >
            <div className="flex items-end gap-2">
              <textarea
                ref={textareaRef}
                rows={1}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={t('chatbot.placeholder')}
                disabled={isLoading}
                aria-label={t('chatbot.placeholder')}
                className="flex-1 resize-none px-3.5 py-2.5 outline-none transition-colors disabled:opacity-50"
                style={{
                  backgroundColor: BUBBLE_BG,
                  color: '#e5e7eb',
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  fontSize: 15,
                  lineHeight: 1.5,
                  maxHeight: 'calc(4 * 24px + 12px)',
                  overflowY: 'auto',
                }}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="p-2.5 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                style={{ backgroundColor: GREEN, borderRadius: 12 }}
                aria-label={t('chatbot.send')}
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes chat-dot {
          0%, 80%, 100% { opacity: 0.25; }
          40% { opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default Chatbot;
