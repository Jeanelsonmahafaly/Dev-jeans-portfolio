import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des traductions
import translationFR from './locales/fr.json';
import translationEN from './locales/en.json';

// Configuration des ressources
const resources = {
  fr: {
    translation: translationFR
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(LanguageDetector) // Détecte la langue du navigateur
  .use(initReactI18next) // Passe i18n à react-i18next
  .init({
    resources,
    fallbackLng: 'fr', // Langue par défaut si la langue détectée n'est pas disponible
    // Ne pas définir 'lng' pour permettre la détection automatique
    debug: false, // Mettre à true pour voir les logs de détection
    
    interpolation: {
      escapeValue: false // React échappe déjà les valeurs
    },
    
    detection: {
      // Ordre de détection : 
      // 1. localStorage (si l'utilisateur a déjà choisi une langue)
      // 2. navigator (langue du navigateur)
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      
      // Convertir les codes de langue du navigateur
      // Ex: 'en-US' -> 'en', 'fr-FR' -> 'fr'
      lookupLocalStorage: 'i18nextLng',
      lookupSessionStorage: 'i18nextLng',
      
      // Convertir automatiquement les codes de langue
      convertDetectedLanguage: (lng: string) => {
        // Si la langue détectée commence par 'en', utiliser 'en'
        if (lng.startsWith('en')) return 'en';
        // Si la langue détectée commence par 'fr', utiliser 'fr'
        if (lng.startsWith('fr')) return 'fr';
        // Sinon, utiliser le fallback (fr)
        return 'fr';
      }
    },
    
    // Langues supportées
    supportedLngs: ['fr', 'en'],
    // Ne pas charger de namespace
    ns: ['translation'],
    defaultNS: 'translation'
  });

// Log de la configuration de détection (utile pour le débogage)
i18n.on('initialized', () => {
  const browserLang = navigator.language || navigator.languages?.[0] || 'unknown';
  const detectedLang = i18n.language;
  const storedLang = localStorage.getItem('i18nextLng');
  
  console.log('🌍 i18n Initialized:');
  console.log('  📱 Browser Language:', browserLang);
  console.log('  💾 Stored Language:', storedLang || 'none');
  console.log('  ✅ Active Language:', detectedLang);
  console.log('  🔄 Detection Order: localStorage → navigator → fallback (fr)');
});

export default i18n;

