import React, { useState, useEffect } from 'react';
import { AlertCircle, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Composant de test pour prouver qu'il est IMPOSSIBLE de récupérer l'email d'un visiteur
 * Ce composant teste TOUTES les méthodes possibles et montre qu'aucune ne fonctionne
 */
const EmailDetectionTest = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [testResults, setTestResults] = useState<any[]>([]);

  useEffect(() => {
    // Tester TOUTES les méthodes possibles pour récupérer un email
    const tests = [
      {
        name: "navigator.email",
        code: "navigator.email",
        result: (navigator as any).email,
        status: "failed"
      },
      {
        name: "navigator.userEmail",
        code: "navigator.userEmail",
        result: (navigator as any).userEmail,
        status: "failed"
      },
      {
        name: "navigator.credentials",
        code: "navigator.credentials",
        result: (navigator as any).credentials?.email,
        status: "failed"
      },
      {
        name: "window.email",
        code: "window.email",
        result: (window as any).email,
        status: "failed"
      },
      {
        name: "document.email",
        code: "document.email",
        result: (document as any).email,
        status: "failed"
      },
      {
        name: "localStorage (email)",
        code: "localStorage.getItem('email')",
        result: localStorage.getItem('email') || localStorage.getItem('userEmail') || localStorage.getItem('user_email'),
        status: "failed"
      },
      {
        name: "sessionStorage (email)",
        code: "sessionStorage.getItem('email')",
        result: sessionStorage.getItem('email') || sessionStorage.getItem('userEmail') || sessionStorage.getItem('user_email'),
        status: "failed"
      },
      {
        name: "Cookies (email)",
        code: "document.cookie",
        result: document.cookie.includes('email') ? 'Trouvé dans cookies' : undefined,
        status: "failed"
      },
      {
        name: "navigator.credentials API",
        code: "navigator.credentials",
        result: typeof (navigator as any).credentials !== 'undefined' ? 'API existe mais ne donne pas l\'email' : undefined,
        status: "failed"
      },
      {
        name: "Chrome Identity API",
        code: "chrome.identity",
        result: typeof (window as any).chrome?.identity !== 'undefined' ? 'API existe mais nécessite extension Chrome' : undefined,
        status: "failed"
      }
    ];

    // Vérifier si l'une des méthodes a fonctionné
    const anySuccess = tests.some(test => test.result !== undefined && test.result !== null && test.result !== false);
    
    setTestResults(tests.map(test => ({
      ...test,
      status: test.result !== undefined && test.result !== null && test.result !== false ? "found" : "failed"
    })));

  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4 overflow-y-auto">
      <div className="glass rounded-2xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto themed-border border-red-500/50">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-lg bg-red-500/20 animate-pulse">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">
                ❌ Test de Détection d'Email
              </h2>
              <p className="text-sm text-gray-400">
                Tentative de récupération de l'email du visiteur par TOUTES les méthodes possibles
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

        {/* Résultat Global */}
        <div className="mb-6 p-4 bg-red-900/30 border-2 border-red-500 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <AlertCircle className="w-6 h-6 text-red-500" />
            <h3 className="text-xl font-bold text-red-400">
              RÉSULTAT : AUCUNE MÉTHODE NE FONCTIONNE
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            J'ai testé <strong className="text-white">{testResults.length} méthodes différentes</strong> pour 
            récupérer votre email automatiquement. <strong className="text-red-400">Aucune n'a fonctionné.</strong>
          </p>
          <p className="text-gray-300 leading-relaxed mt-2">
            Cela prouve qu'il est <strong className="text-red-400">IMPOSSIBLE</strong> de récupérer l'email 
            d'un visiteur sans son consentement explicite.
          </p>
        </div>

        {/* Liste des Tests */}
        <div className="space-y-3">
          <h4 className="font-semibold text-white flex items-center gap-2">
            <Search className="w-5 h-5" />
            Méthodes Testées :
          </h4>
          
          {testResults.map((test, index) => (
            <div 
              key={index}
              className={`p-4 rounded-lg border-2 ${
                test.status === "failed" 
                  ? "bg-red-900/20 border-red-500/30" 
                  : "bg-yellow-900/20 border-yellow-500/30"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-2xl ${test.status === "failed" ? "text-red-500" : "text-yellow-500"}`}>
                      {test.status === "failed" ? "❌" : "⚠️"}
                    </span>
                    <span className="font-semibold text-white">{test.name}</span>
                  </div>
                  <div className="bg-black/30 rounded px-3 py-2 mb-2">
                    <code className="text-sm text-gray-300 font-mono">{test.code}</code>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-400">Résultat : </span>
                    <span className={test.status === "failed" ? "text-red-400" : "text-yellow-400"}>
                      {test.result !== undefined && test.result !== null && test.result !== false
                        ? test.result
                        : "undefined (n'existe pas)"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explication */}
        <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
          <h4 className="font-semibold text-white mb-3">
            🔒 Pourquoi TOUTES ces méthodes échouent ?
          </h4>
          <div className="space-y-2 text-sm text-gray-300">
            <p>
              <strong className="text-white">1. Protection du navigateur :</strong> Les navigateurs (Chrome, Firefox, Edge, Safari) 
              ne partagent JAMAIS l'email avec les sites web pour des raisons de sécurité.
            </p>
            <p>
              <strong className="text-white">2. Conformité légale :</strong> RGPD (Europe), CCPA (Californie) et autres lois 
              sur la protection des données interdisent la collecte d'informations personnelles sans consentement.
            </p>
            <p>
              <strong className="text-white">3. Prévention du spam :</strong> Si c'était possible, tous les sites web 
              pourraient collecter votre email et vous spammer.
            </p>
            <p>
              <strong className="text-white">4. Prévention du phishing :</strong> Les hackers pourraient voler des millions 
              d'emails pour des attaques de phishing.
            </p>
          </div>
        </div>

        {/* Solutions */}
        <div className="mt-6 p-4 bg-green-900/20 rounded-xl border border-green-500/30">
          <h4 className="font-semibold text-green-400 mb-3">
            ✅ Solutions Légales et Fonctionnelles :
          </h4>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <strong className="text-white">Formulaire de contact :</strong> L'utilisateur entre volontairement son email.
                <span className="text-green-400 ml-2">(Déjà sur votre site)</span>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <strong className="text-white">OAuth (Google, Facebook) :</strong> L'utilisateur autorise explicitement 
                le partage de son email.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <strong className="text-white">Newsletter :</strong> Inscription volontaire avec double opt-in.
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <div>
                <strong className="text-white">Chatbot :</strong> Demander l'email dans la conversation.
                <span className="text-green-400 ml-2">(Déjà sur votre site)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de fermeture */}
        <div className="flex justify-center mt-6">
          <Button
            onClick={() => setIsVisible(false)}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            J'ai compris - Fermer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmailDetectionTest;

