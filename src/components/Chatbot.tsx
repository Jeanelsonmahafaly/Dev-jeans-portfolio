import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, Loader, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { openaiService } from '@/services/openaiService';
import { ragService } from '@/services/ragService';
import knowledgeBase from '@/data/knowledge.json';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const Chatbot = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: t('chatbot.welcome'),
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Mettre à jour le message de bienvenue quand la langue change
  useEffect(() => {
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: t('chatbot.welcome'),
        timestamp: new Date(),
      },
    ]);
  }, [t]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    // Vérifier que l'API est configurée
    if (!openaiService.isConfigured()) {
      setApiError(t('chatbot.apiError'));
      return;
    }

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setApiError(null);

    try {
      // Récupérer le contexte pertinent via RAG
      const relevantContext = ragService.getContext(inputValue, knowledgeBase);
      
      // Formater les messages précédents pour OpenAI
      const conversationHistory = messages
        .filter((m) => m.role === 'user' || m.role === 'assistant')
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      // Appel à OpenAI avec le contexte RAG
      const response = await openaiService.sendMessage(
        inputValue,
        relevantContext,
        conversationHistory
      );

      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      setApiError(t('chatbot.generalError'));
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Suggestions de questions
  const suggestions = t('chatbot.suggestions', { returnObjects: true }) as string[];

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 md:bottom-6 md:right-6 p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 z-40 ${
          isOpen
            ? 'bg-[#10B981] hover:bg-[#059669] scale-110'
            : 'bg-[#10B981] hover:bg-[#059669] hover:scale-110'
        }`}
        title={t('chatbot.openChat')}
        aria-label={t('chatbot.openChat')}
      >
        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-20 md:right-4 lg:bottom-24 lg:right-6 w-full h-full md:w-96 md:h-[600px] md:max-h-[calc(100vh-8rem)] bg-white md:rounded-2xl shadow-2xl flex flex-col border-0 md:border border-gray-200 z-50 animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#10B981] to-[#059669] text-white p-4 md:p-6 rounded-t-none md:rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base md:text-lg">{t('chatbot.title')}</h3>
              <p className="text-xs md:text-sm text-emerald-50">{t('chatbot.subtitle')}</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-lg transition-colors"
              title={t('chatbot.closeChat')}
              aria-label={t('chatbot.closeChat')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-[#10B981] text-white rounded-br-none'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none border border-gray-300'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <span className="text-xs mt-2 block opacity-70">
                    {message.timestamp.toLocaleTimeString('fr-FR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-lg rounded-bl-none px-4 py-3 border border-gray-300">
                  <div className="flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin text-[#10B981]" />
                    <span className="text-sm text-gray-700">{t('chatbot.thinking')}</span>
                  </div>
                </div>
              </div>
            )}

            {apiError && (
              <div className="flex justify-start">
                <div className="bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg rounded-bl-none px-4 py-3 max-w-xs">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-red-700 dark:text-red-300">{apiError}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Suggestions d'initial */}
            {messages.length === 1 && !isLoading && (
              <div className="space-y-2 mt-4">
                <p className="text-xs text-gray-600 px-2">{t('chatbot.suggestionsTitle')}</p>
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setInputValue(suggestion);
                      inputRef.current?.focus();
                    }}
                    className="w-full text-left p-2 text-xs md:text-sm bg-gray-50 hover:bg-[#10B981]/10 rounded text-gray-700 transition-colors border border-gray-200"
                  >
                    💬 {suggestion}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-3 md:p-4 bg-white">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t('chatbot.placeholder')}
                disabled={isLoading}
                className="flex-1 px-3 md:px-4 py-2 text-sm md:text-base border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:border-transparent disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="px-3 md:px-4 py-2 bg-[#10B981] hover:bg-[#059669] disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2"
                aria-label={t('chatbot.send')}
              >
                {isLoading ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-2 text-center">
              {t('chatbot.poweredBy')}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
