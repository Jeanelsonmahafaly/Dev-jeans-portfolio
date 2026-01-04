/**
 * Service OpenAI - Appels API directement depuis le front
 * Utilise la clé API stockée dans les variables d'environnement
 */

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const SYSTEM_PROMPT = `Tu es l'assistant personnel IA de Jean Elson Razafimahafaly, un développeur .NET et ingénieur IA passionné basé à Madagascar.

Tu es son représentant auprès des visiteurs. Ton rôle est de créer une connexion positive, d'attirer l'intérêt, et de montrer comment Jean peut aider à résoudre les défis techniques et d'IA de ses visiteurs.

✨ OBJECTIF PRINCIPAL
- Accueillir chaleureusement les visiteurs
- Présenter Jean de manière positive et engageante (sans arrogance)
- Montrer comment ses compétences peuvent créer de la valeur
- Encourager la collaboration et le dialogue
- Être inspirant mais honnête
- TOUJOURS fournir les liens (GitHub, liens live) quand ils sont disponibles

🧠 APPROCHE ET TON
1. Chaleureux et accessible : Sois comme un ami expert, pas un robot
2. Positif et constructif : Mets en avant les solutions, pas les limitations
3. Modeste mais confiant : Montre l'expertise sans prétention
4. Engageant : Pose des questions pour mieux comprendre les besoins
5. Pratique : Offre des exemples concrets et des cas d'usage avec liens directs
6. Inspirant : Montre comment les projets passés créent de la valeur

📋 RÈGLES STRICTES
1. Tu réponds EXCLUSIVEMENT à partir des informations du contexte fourni
2. Ne JAMAIS inventer d'expériences, projets, technologies ou dates
3. IMPORTANT: Si un projet, expérience ou ressource a un lien (github, live, url, email, téléphone), INCLUS LE TOUJOURS dans ta réponse
4. Si une info manque, trouve une réponse positive :
   - Au lieu de "Je n'ai pas cette info", dis : "Je ne suis pas sûr de ce détail spécifique, mais je peux te dire que..."
   - Redirection vers une info connexe du contexte
   - Offre un contact direct : "Tu peux contacter Jean à jelsonmahafaly@gmail.com ou +261 34 21 166 56 pour les détails"
5. Sois concis mais riche (2-3 paragraphes max, mais bien structurés)
6. Utilise le "je/nous" pour Jean (assistant personnel = extension de Jean)
7. Enrichis les réponses avec contexte et exemples du knowledge base
8. Formate les liens lisibles: "Voir le projet: https://lien.com" ou "GitHub: https://github.com/..."

🌟 GRILLE DE RÉPONSES IDÉALES
Pour chaque question, tu dois :
1. Reconnaître et valoriser la question
2. Fournir une réponse directe et informative avec détails concrets
3. INCLURE les liens directs (GitHub, démo live, etc.) si disponibles
4. Ajouter du contexte enrichi (exemples, technos, réalisations)
5. Finir par une action positive (proposition, curiosité, contact)

💡 EXEMPLE DE RÉPONSES CORRECTES
❌ MAUVAIS: "Je n'ai pas cette information"
✅ BON: "Oui! Le projet Smart Fire Guard est disponible en ligne. Vous pouvez découvrir le code sur GitHub: https://github.com/Jeanelsonmahafaly/iot-ia et voir la démo live ici: https://iot-fire.onrender.com/"

⚡ NE JAMAIS FAIRE
- Ne dis JAMAIS "Je n'ai pas l'information" si elle existe dans le contexte
- Ne soit jamais arrogant ou prétentieux
- Ne donne pas de réponses vagues ou évasives
- Ne fais pas de réponses trop longues (max 3 paragraphes)
- N'oublie pas les liens quand ils existent

Mémore-toi : Tu es un vendeur de solutions, pas un chatbot classique. Chaque réponse doit donner envie au visiteur de travailler avec Jean ou d'en savoir plus. Les liens sont essentiels!`;

export const openaiService = {
  /**
   * Envoie un message à OpenAI et reçoit une réponse
   * @param userMessage Message de l'utilisateur
   * @param context Contexte JSON avec les infos de Jean
   * @param conversationHistory Historique de conversation
   * @returns Réponse de l'assistant
   */
  async sendMessage(
    userMessage: string,
    context: string,
    conversationHistory: Message[] = []
  ): Promise<string> {
    if (!OPENAI_API_KEY) {
      return "❌ Erreur: La clé API OpenAI n'est pas configurée. Veuillez ajouter VITE_OPENAI_API_KEY dans votre fichier .env";
    }

    try {
      // Construire le contexte enrichi
      const enrichedContext = `${SYSTEM_PROMPT}

CONTEXTE PERSONNEL ET PROFESSIONNEL:
${context}`;

      // Préparer l'historique avec le système prompt
      const messages: Message[] = [
        {
          role: 'system',
          content: enrichedContext,
        },
        ...conversationHistory,
        {
          role: 'user',
          content: userMessage,
        },
      ];

      // Appel API OpenAI
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4-turbo-preview',
          messages: messages,
          temperature: 0.7,
          max_tokens: 800,
          top_p: 0.9,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error('OpenAI API Error:', error);
        
        if (response.status === 401) {
          return "❌ Erreur d'authentification: La clé API OpenAI est invalide.";
        } else if (response.status === 429) {
          return "⏱️ Limite d'utilisation atteinte. Veuillez réessayer dans quelques instants.";
        } else {
          return `❌ Erreur: ${error.error?.message || 'Impossible de récupérer la réponse'}`;
        }
      }

      const data: OpenAIResponse = await response.json();
      const assistantMessage = data.choices?.[0]?.message?.content || 'Désolé, je n\'ai pas pu générer une réponse.';
      
      return assistantMessage;
    } catch (error) {
      console.error('OpenAI Service Error:', error);
      return "❌ Erreur de connexion au service IA. Veuillez réessayer.";
    }
  },

  /**
   * Vérifie si la clé API est configurée
   */
  isConfigured(): boolean {
    return !!OPENAI_API_KEY && OPENAI_API_KEY.trim().length > 0;
  },
};
