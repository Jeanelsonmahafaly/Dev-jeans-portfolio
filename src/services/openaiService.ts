/**
 * Service LLM (Groq ou OpenAI) — API chat compatible OpenAI depuis le navigateur.
 * Préfère VITE_GROQ_API_KEY si définie (clés au format gsk_...), sinon VITE_OPENAI_API_KEY.
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

const GROQ_API_KEY = (import.meta.env.VITE_GROQ_API_KEY as string | undefined)?.trim();
const OPENAI_API_KEY = (import.meta.env.VITE_OPENAI_API_KEY as string | undefined)?.trim();

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

const useGroq = Boolean(GROQ_API_KEY);
const apiKey = useGroq ? GROQ_API_KEY! : OPENAI_API_KEY!;
const apiUrl = useGroq ? GROQ_API_URL : OPENAI_API_URL;

const chatModel = useGroq
  ? (import.meta.env.VITE_GROQ_MODEL as string | undefined)?.trim() || 'llama-3.3-70b-versatile'
  : (import.meta.env.VITE_OPENAI_MODEL as string | undefined)?.trim() || 'gpt-4-turbo-preview';

const SYSTEM_PROMPT = `Tu es l'assistant de Jean Elson Razafimahafaly (développeur .NET / IA, Madagascar).

LONGUEUR ADAPTATIVE (très important)
1) Question simple (contact, oui/non, une info ponctuelle) → 2 à 5 phrases, direct, sans blabla.
2) Question qui demande à COMPRENDRE ou DÉCRIRE un projet, un outil ou une techno : ex. « c'est quoi », « ce quoi », « explique », « décris », « comment ça marche », « quel type », « en quoi ça consiste », « parle-moi de », « détails sur »…
   → Réponse PLUS COMPLÈTE : un court paragraphe d'introduction (2-3 phrases), puis 3 à 6 puces avec rôle du système, capteurs/stack ou techno principales, et lien démo/GitHub si présents dans le contexte.
   → Viser environ 120 à 200 mots pour ce mode. Toujours FINIR par une phrase complète (ne jamais couper au milieu d'une idée).

CONTENU
- Uniquement à partir du contexte fourni ; n'invente pas de faits.
- Inclure les liens (GitHub, démo, email, téléphone) quand le contexte les contient, en fin de message ou après les puces.

TON
- Clair, naturel, professionnel. Pas de ton publicitaire excessif.`;

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
    if (!apiKey) {
      return "❌ Erreur: Aucune clé API configurée. Ajoutez VITE_GROQ_API_KEY (Groq) ou VITE_OPENAI_API_KEY dans .env à la racine du projet, puis redémarrez le serveur (npm run dev).";
    }

    const detailPattern =
      /c['']est quoi|cest quoi|ce quoi|qu['']est[- ]ce que|explique|décris|décri|détails?|detail|comment (ça|ca) marche|parle[- ]moi|raconte|en savoir plus|quel(le)?s? types?|de quoi s['']agit|what is|describe|explain|how does|tell me about/i;
    const wantsDetail = detailPattern.test(userMessage.trim());
    const maxTokens = wantsDetail ? 720 : 420;

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

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: chatModel,
          messages: messages,
          temperature: wantsDetail ? 0.55 : 0.48,
          max_tokens: maxTokens,
          top_p: 0.88,
        }),
      });

      if (!response.ok) {
        let errMsg = 'Impossible de récupérer la réponse';
        try {
          const error = await response.json();
          console.error('LLM API Error:', error);
          errMsg = error.error?.message || error.message || errMsg;
        } catch {
          errMsg = await response.text().catch(() => errMsg);
        }

        if (response.status === 401) {
          return `❌ Erreur d'authentification: clé API ${useGroq ? 'Groq' : 'OpenAI'} invalide ou expirée.`;
        }
        if (response.status === 429) {
          return "⏱️ Limite d'utilisation atteinte. Veuillez réessayer dans quelques instants.";
        }
        return `❌ Erreur: ${errMsg}`;
      }

      const data: OpenAIResponse = await response.json();
      const assistantMessage = data.choices?.[0]?.message?.content || 'Désolé, je n\'ai pas pu générer une réponse.';
      
      return assistantMessage;
    } catch (error) {
      console.error('LLM Service Error:', error);
      return "❌ Erreur de connexion au service IA. Veuillez réessayer.";
    }
  },

  /**
   * Vérifie si une clé API (Groq ou OpenAI) est configurée
   */
  isConfigured(): boolean {
    return Boolean((GROQ_API_KEY && GROQ_API_KEY.length > 0) || (OPENAI_API_KEY && OPENAI_API_KEY.length > 0));
  },
};
