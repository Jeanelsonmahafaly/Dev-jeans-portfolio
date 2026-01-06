// Service de tracking des visiteurs
interface VisitorInfo {
  ip: string;
  country: string;
  city: string;
  region: string;
  latitude: number;
  longitude: number;
  timezone: string;
  isp: string;
  userAgent: string;
  language: string;
  screenResolution: string;
  timestamp: string;
  referrer: string;
}

// Fonction pour obtenir les informations du visiteur
export const getVisitorInfo = async (): Promise<VisitorInfo | null> => {
  try {
    // Obtenir l'IP et la géolocalisation via ipapi.co (gratuit, pas besoin de clé API)
    const ipResponse = await fetch('https://ipapi.co/json/');
    const ipData = await ipResponse.json();

    // Informations du navigateur
    const userAgent = navigator.userAgent;
    const language = navigator.language;
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    const referrer = document.referrer || 'Direct';
    const timestamp = new Date().toISOString();

    const visitorInfo: VisitorInfo = {
      ip: ipData.ip || 'Unknown',
      country: ipData.country_name || 'Unknown',
      city: ipData.city || 'Unknown',
      region: ipData.region || 'Unknown',
      latitude: ipData.latitude || 0,
      longitude: ipData.longitude || 0,
      timezone: ipData.timezone || 'Unknown',
      isp: ipData.org || 'Unknown',
      userAgent,
      language,
      screenResolution,
      timestamp,
      referrer
    };

    return visitorInfo;
  } catch (error) {
    console.error('Erreur lors de la récupération des informations du visiteur:', error);
    return null;
  }
};

// Fonction pour envoyer les informations par email via Web3Forms
export const sendVisitorNotification = async (visitorInfo: VisitorInfo): Promise<boolean> => {
  try {
    const formData = new FormData();
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "49a90222-e709-458d-b53f-562f55836dea");
    formData.append("subject", `🔔 Nouveau visiteur sur votre portfolio - ${visitorInfo.city}, ${visitorInfo.country}`);
    formData.append("from_name", "Portfolio Visitor Tracker");
    
    // Créer un message HTML formaté
    const message = `
📍 NOUVEAU VISITEUR DÉTECTÉ
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🌐 INFORMATIONS RÉSEAU
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Adresse IP: ${visitorInfo.ip}
• Fournisseur: ${visitorInfo.isp}

📍 LOCALISATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Pays: ${visitorInfo.country}
• Région: ${visitorInfo.region}
• Ville: ${visitorInfo.city}
• Fuseau horaire: ${visitorInfo.timezone}
• Coordonnées GPS: ${visitorInfo.latitude}, ${visitorInfo.longitude}
• Google Maps: https://www.google.com/maps?q=${visitorInfo.latitude},${visitorInfo.longitude}

💻 INFORMATIONS SYSTÈME
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Navigateur: ${visitorInfo.userAgent}
• Langue: ${visitorInfo.language}
• Résolution écran: ${visitorInfo.screenResolution}

🔗 INFORMATIONS DE VISITE
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Provenance: ${visitorInfo.referrer}
• Date et heure: ${new Date(visitorInfo.timestamp).toLocaleString('fr-FR', { 
      timeZone: 'Indian/Antananarivo',
      dateStyle: 'full',
      timeStyle: 'long'
    })}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Notification automatique du Portfolio
    `;

    formData.append("message", message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Erreur lors de l\'envoi de la notification:', error);
    return false;
  }
};

// Fonction principale pour tracker un visiteur
export const trackVisitor = async (): Promise<void> => {
  try {
    // Vérifier si ce visiteur a déjà été tracké dans cette session
    const hasBeenTracked = sessionStorage.getItem('visitor_tracked');
    
    if (hasBeenTracked) {
      return; // Ne pas tracker deux fois dans la même session
    }

    // Obtenir les informations du visiteur
    const visitorInfo = await getVisitorInfo();
    
    if (visitorInfo) {
      // Envoyer la notification par email
      const success = await sendVisitorNotification(visitorInfo);
      
      if (success) {
        // Marquer comme tracké pour cette session
        sessionStorage.setItem('visitor_tracked', 'true');
        console.log('Visitor tracked successfully');
      }
    }
  } catch (error) {
    console.error('Erreur lors du tracking du visiteur:', error);
  }
};

