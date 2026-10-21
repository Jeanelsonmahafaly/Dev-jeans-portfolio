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

interface StreamChunk {
  choices?: Array<{
    delta?: {
      content?: string;
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

const SYSTEM_PROMPT = `Tu es l'assistant officiel de Jean Elson Razafimahafaly, développeur .NET & ingénieur IA basé à Antananarivo (Madagascar). Tu réponds aux visiteurs de son portfolio (recruteurs, clients, collègues).

# TON RÔLE
- Répondre avec précision, techniquement et de façon utile, en t'appuyant UNIQUEMENT sur le CONTEXTE fourni plus bas.
- Tu es conversationnel : utilise l'historique pour comprendre les questions de relance (« et lui ? », « et ça où ? », « pourquoi ? », « compare-les »…).
- Détecte la langue de l'utilisateur (français, anglais, malgache approximatif, fautes de frappe incluses) et réponds dans cette même langue.

# RÈGLES DE CONTENU (priorité absolue)
1. Base-toi UNIQUEMENT sur le CONTEXTE. N'invente jamais de date, entreprise, techno, chiffre ou projet absent du contexte.
2. Si l'information demandée n'est PAS dans le contexte, dis-le clairement (« Je n'ai pas cette information dans mon contexte ») puis oriente vers le contact réel (email, téléphone) — n'improvise surtout pas une réponse plausible.
3. Questions composées (« .NET ET IA », « expérience + compétences ») → réponds à CHAQUE partie, séparément, sans rien oublier.
4. Questions vagues ou trop courtes (« IA ? », « projets ? ») → donne LA réponse la plus utile possible (ex. les points phares) et propose 1-2 questions de suivi concrètes au lieu de demander des précisions vides.
5. Questions hors-sujet (sport, politique, météo…) → rappelle poliment que tu es l'assistant du portfolio de Jean Elson et redirige vers ses domaines (dev .NET, IA, data, IoT, cloud) + contact.
6. Questions sur la disponibilité / mission / collaboration → réponds à partir de work_with_me et du contact ; termine toujours par l'email et le téléphone.
7. Les liens fournis dans le contexte (GitHub, démo live, CV, email) sont précieux : cite-les à chaque réponse pertinente, en Markdown lien : \`[label](url)\`.

# FORMATAGE (obligatoire — le chat affiche le Markdown)
- Utilise le Markdown : **gras**, \`code\`, listes à puces \`-\`, liens cliquables, et de petits titres **gras** en guise de sections pour les réponses longues.
- NE JAMAIS entourer ta réponse de \`\`\`markdown ni de blocs de code fences.
- Réponses structurées, aérées : pas de gros pavé unique.

# LONGUEUR ADAPTATIVE
- Question simple / ponctuelle (contact, oui/non, une info précise) → 2 à 5 lignes, direct, sans blabla.
- Question exploratoire (« parle-moi de », « ton expérience », « tes compétences », « quels projets ») → 150-250 mots : intro courte en 1-2 phrases, puis des puces **thématiques** bien triées (pas une liste chronologique brute). Commence par le plus pertinent pour la question posée.
- Description d'un projet / techno (« c'est quoi Smart Fire Guard », « explique le RAG », « comment ça marche ») → intro (2-3 phrases : rôle, objectif, contexte), puis 4-6 puces techniques (architecture, stack, points forts), puis liens GitHub/démo.
- Comparaison (« .NET ou React », « expérience A vs B ») → petit tableau Markdown ou deux colonnes de puces, puis verdict en 1 phrase.
- Toujours termine par une phrase complète. NE TRONQUE JAMAIS ta réponse au milieu d'une idée.

# TON
- Professionnel mais naturel, comme un collègue expert qui explique. Pas de ton publicitaire, pas d'emojis abusifs (1 max par message, aucun dans les réponses techniques denses).
- Concrète : préfère « API FastAPI + agents RAG sur Ollama/Llama avec Qdrant » à « des solutions d'IA innovantes ».`;

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
      /c['']est quoi|cest quoi|ce quoi|qu['']est[- ]ce que|explique|décris|décri|détails?|detail|comment (ça|ca) marche|parle[- ]moi|raconte|en savoir plus|quel(le)?s? types?|de quoi s['']agit|expérience|experience|compétence|competen|projet|parcours|formation|société|societe|disponib|mission|collabor|what is|describe|explain|how does|tell me about|skills?|projects?|experience/i;
    const wantsDetail = detailPattern.test(userMessage.trim());
    const maxTokens = wantsDetail ? 1024 : 560;

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

  /**
   * Envoie un message et stream la réponse (SSE / ReadableStream).
   * Appelle onDelta à chaque fragment reçu avec le texte complet accumulé jusqu'ici.
   * Rejette avec une Error si la clé manque ou si l'API échoue.
   */
  async sendMessageStream(
    userMessage: string,
    context: string,
    conversationHistory: Message[] = [],
    onDelta: (fullText: string) => void,
    signal?: AbortSignal
  ): Promise<string> {
    if (!apiKey) {
      throw new Error('missing-key');
    }

    const detailPattern =
      /c['']est quoi|cest quoi|ce quoi|qu['']est[- ]ce que|explique|décris|décri|détails?|detail|comment (ça|ca) marche|parle[- ]moi|raconte|en savoir plus|quel(le)?s? types?|de quoi s['']agit|expérience|experience|compétence|competen|projet|parcours|formation|société|societe|disponib|mission|collabor|what is|describe|explain|how does|tell me about|skills?|projects?|experience/i;
    const wantsDetail = detailPattern.test(userMessage.trim());
    const maxTokens = wantsDetail ? 1024 : 560;

    const enrichedContext = `${SYSTEM_PROMPT}

CONTEXTE PERSONNEL ET PROFESSIONNEL:
${context}`;

    const messages: Message[] = [
      { role: 'system', content: enrichedContext },
      ...conversationHistory,
      { role: 'user', content: userMessage },
    ];

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: chatModel,
        messages,
        temperature: wantsDetail ? 0.55 : 0.48,
        max_tokens: maxTokens,
        top_p: 0.88,
        stream: true,
      }),
      signal,
    });

    if (!response.ok) {
      console.error('LLM API Error:', response.status);
      if (response.status === 429) throw new Error('rate-limit');
      throw new Error(`http-${response.status}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      // Repli non-streamé si body indisponible
      const data: OpenAIResponse = await response.json();
      const full = data.choices?.[0]?.message?.content || '';
      if (full) onDelta(full);
      return full;
    }

    const decoder = new TextDecoder();
    let buffer = '';
    let fullText = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split('\n');
      buffer = lines.pop() ?? '';

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith('data:')) continue;
        const payload = trimmed.slice(5).trim();
        if (payload === '[DONE]') continue;
        try {
          const chunk: StreamChunk = JSON.parse(payload);
          const delta = chunk.choices?.[0]?.delta?.content;
          if (delta) {
            fullText += delta;
            onDelta(fullText);
          }
        } catch {
          // fragment malformé : on ignore
        }
      }
    }

    if (!fullText) throw new Error('empty-response');
    return fullText;
  },
};
