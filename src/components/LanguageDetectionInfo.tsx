import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Check } from 'lucide-react';

/**
 * Composant de démonstration pour afficher les informations de détection de langue
 * Ce composant peut être retiré en production
 */
const LanguageDetectionInfo = () => {
  const { i18n } = useTranslation();
  const [detectedLanguage, setDetectedLanguage] = useState<string>('');
  const [browserLanguage, setBrowserLanguage] = useState<string>('');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Récupérer la langue du navigateur
    const navLang = navigator.language || navigator.languages?.[0] || 'unknown';
    setBrowserLanguage(navLang);
    
    // Récupérer la langue détectée par i18n
    setDetectedLanguage(i18n.language);

    // Masquer automatiquement après 10 secondes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, [i18n.language]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="glass rounded-xl p-4 themed-border shadow-2xl animate-fade-in-up">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-[#10B981]/20">
            <Globe className="w-5 h-5 text-[#10B981]" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-white text-sm mb-2 flex items-center gap-2">
              <Check className="w-4 h-4 text-[#10B981]" />
              Langue détectée automatiquement
            </h4>
            <div className="space-y-1 text-xs text-gray-400">
              <p>
                <span className="text-gray-500">Navigateur:</span>{' '}
                <span className="text-white font-medium">{browserLanguage}</span>
              </p>
              <p>
                <span className="text-gray-500">Langue active:</span>{' '}
                <span className="text-[#10B981] font-medium">
                  {detectedLanguage === 'fr' ? '🇫🇷 Français' : '🇬🇧 English'}
                </span>
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="mt-2 text-xs text-gray-500 hover:text-white transition-colors"
            >
              Masquer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageDetectionInfo;

