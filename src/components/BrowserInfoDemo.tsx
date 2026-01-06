import React, { useState, useEffect } from 'react';
import { Info, X, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Composant de démonstration pour montrer ce qui est accessible dans le navigateur
 * ⚠️ À RETIRER EN PRODUCTION - Uniquement pour démonstration
 */
const BrowserInfoDemo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [browserInfo, setBrowserInfo] = useState<any>({});

  useEffect(() => {
    // Collecter toutes les informations disponibles
    const info = {
      // ✅ Informations DISPONIBLES
      available: {
        userAgent: navigator.userAgent,
        language: navigator.language,
        languages: navigator.languages,
        platform: navigator.platform,
        vendor: navigator.vendor,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        timezoneOffset: new Date().getTimezoneOffset(),
        referrer: document.referrer || 'Direct',
        currentUrl: window.location.href,
        timestamp: new Date().toISOString(),
      },
      // ❌ Informations NON DISPONIBLES
      notAvailable: {
        email: (navigator as any).email,
        userName: (navigator as any).userName,
        userFullName: (navigator as any).userFullName,
        phoneNumber: (navigator as any).phoneNumber,
        address: (navigator as any).address,
        accountInfo: (navigator as any).accountInfo,
      }
    };

    setBrowserInfo(info);
  }, []);

  if (!isVisible) {
    return (
      <Button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 left-4 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-2xl"
        size="sm"
      >
        <Info className="w-4 h-4 mr-2" />
        Voir les infos du navigateur
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto themed-border">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/20">
              <Info className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">
                Informations Disponibles dans le Navigateur
              </h2>
              <p className="text-sm text-gray-400">
                Démonstration de ce qui est accessible via JavaScript
              </p>
            </div>
          </div>
          <Button
            onClick={() => setIsVisible(false)}
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-6">
          {/* ✅ Informations DISPONIBLES */}
          <div className="glass rounded-xl p-4 themed-border">
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">
                ✅ Informations DISPONIBLES (Sans Permission)
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries(browserInfo.available || {}).map(([key, value]) => (
                <div key={key} className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-xs text-gray-400 mb-1 font-mono">
                    navigator.{key}
                  </div>
                  <div className="text-sm text-green-400 font-medium break-all">
                    {typeof value === 'object' 
                      ? JSON.stringify(value) 
                      : String(value)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ❌ Informations NON DISPONIBLES */}
          <div className="glass rounded-xl p-4 themed-border border-red-500/30">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <h3 className="text-lg font-semibold text-white">
                ❌ Informations NON DISPONIBLES
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.entries(browserInfo.notAvailable || {}).map(([key, value]) => (
                <div key={key} className="bg-red-900/20 rounded-lg p-3 border border-red-500/30">
                  <div className="text-xs text-gray-400 mb-1 font-mono">
                    navigator.{key}
                  </div>
                  <div className="text-sm text-red-400 font-medium">
                    {value === undefined ? 'undefined ❌' : String(value)}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-500/30">
              <p className="text-sm text-red-300">
                <strong>⚠️ Important :</strong> Ces propriétés n'existent pas dans l'API Navigator.
                Il est <strong>IMPOSSIBLE</strong> de récupérer l'email, le nom, ou toute autre
                information personnelle sans le consentement explicite de l'utilisateur.
              </p>
            </div>
          </div>

          {/* 🔐 Informations avec Permission */}
          <div className="glass rounded-xl p-4 themed-border border-yellow-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-yellow-500" />
              <h3 className="text-lg font-semibold text-white">
                🔐 Informations Accessibles AVEC Permission
              </h3>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <div>
                  <strong>Géolocalisation précise :</strong> navigator.geolocation.getCurrentPosition()
                  <span className="text-yellow-400 ml-2">(Popup de permission)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <div>
                  <strong>Caméra et Microphone :</strong> navigator.mediaDevices.getUserMedia()
                  <span className="text-yellow-400 ml-2">(Popup de permission)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <div>
                  <strong>Notifications :</strong> Notification.requestPermission()
                  <span className="text-yellow-400 ml-2">(Popup de permission)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-500">•</span>
                <div>
                  <strong>Presse-papiers :</strong> navigator.clipboard.readText()
                  <span className="text-yellow-400 ml-2">(Popup de permission)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 🎯 Comment Obtenir l'Email */}
          <div className="glass rounded-xl p-4 themed-border border-green-500/30">
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-green-500" />
              <h3 className="text-lg font-semibold text-white">
                🎯 Comment Obtenir l'Email d'un Visiteur ?
              </h3>
            </div>
            <div className="space-y-3">
              <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                <div className="font-semibold text-green-400 mb-1">
                  ✅ Méthode 1 : Formulaire de Contact (Recommandé)
                </div>
                <div className="text-sm text-gray-300">
                  L'utilisateur entre volontairement son email dans un formulaire.
                  <span className="text-green-400 ml-2">← Déjà implémenté sur votre site !</span>
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                <div className="font-semibold text-green-400 mb-1">
                  ✅ Méthode 2 : Authentification OAuth
                </div>
                <div className="text-sm text-gray-300">
                  "Se connecter avec Google" - L'utilisateur autorise explicitement le partage.
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                <div className="font-semibold text-green-400 mb-1">
                  ✅ Méthode 3 : Newsletter
                </div>
                <div className="text-sm text-gray-300">
                  Inscription volontaire à une newsletter.
                </div>
              </div>
              <div className="bg-green-900/20 rounded-lg p-3 border border-green-500/30">
                <div className="font-semibold text-green-400 mb-1">
                  ✅ Méthode 4 : Chatbot
                </div>
                <div className="text-sm text-gray-300">
                  Demander l'email dans la conversation du chatbot.
                </div>
              </div>
            </div>
          </div>

          {/* Bouton de fermeture */}
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => setIsVisible(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Fermer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowserInfoDemo;

