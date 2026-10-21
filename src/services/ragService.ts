/**
 * Service RAG léger (Retrieval-Augmented Generation)
 * Recherche textuelle simple et similarité pour filtrer les infos pertinentes du knowledge.json
 */

interface KnowledgeBase {
  profile?: any;
  expertise?: any;
  experiences?: any[];
  projects?: any[];
  education?: any[];
  achievements?: any[];
  faqs?: any;
  [key: string]: any;
}

/**
 * Normalise une string : minuscules, sans accents, espaces réduits
 */
function normalize(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9+#.\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Tokenise une requête : mots significatifs (stopwords retirés, stemming léger)
 */
const STOPWORDS = new Set([
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'et', 'est', 'sont', 'avec', 'pour',
  'dans', 'sur', 'que', 'qui', 'quoi', 'quel', 'quelle', 'quels', 'quelles', 'ce', 'cette',
  'ces', 'mon', 'ma', 'mes', 'son', 'sa', 'ses', 'votre', 'notre', 'vous', 'nous', 'je',
  'tu', 'il', 'elle', 'on', 'ils', 'elles', 'se', 'au', 'aux', 'en', 'y', 'a', 'as', 'ai',
  'avoir', 'etre', 'fait', 'faire', 'peux', 'peut', 'puis', 'aussi', 'bien', 'alors',
  'donc', 'mais', 'ou', 'od', 'si', 'ne', 'pas', 'plus', 'très', 'tres', 'tu', 't', 's',
  'j', 'd', 'l', 'n', 'c', 'qu', 'the', 'and', 'for', 'are', 'you', 'your', 'with', 'what',
  'how', 'does', 'about', 'tell', 'me', 'is', 'in', 'on', 'of', 'my', 'have', 'has', 'can',
  'vous', 'avez', 'etes', 'ete', 'chez', ' travail', 'travail', 'poste', 'ans', 'mois',
]);

function tokenize(text: string): string[] {
  return normalize(text)
    .split(' ')
    .map((w) => w.replace(/(ements|ement|ations|ation|eurs|euse|ance|ence|ique|iques|ifs|ive|ives|age|ages|tion|sion|er|ir|re|e|s)$/i, ''))
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

/**
 * Score de pertinence : combien de tokens de la requête apparaissent dans le texte
 */
function scoreText(queryTokens: string[], text: string): number {
  if (queryTokens.length === 0) return 0;
  const normText = ` ${normalize(text)} `;
  let hits = 0;
  for (const token of queryTokens) {
    if (normText.includes(` ${token}`) || normText.includes(`${token} `) || normText.includes(` ${token} `)) {
      hits++;
    }
  }
  return hits / queryTokens.length;
}

/**
 * Formate un objet de la knowledge base en texte searchable
 */
function sectionToText(item: unknown): string {
  return JSON.stringify(item);
}

/**
 * Récupère les sections pertinentes du knowledge base basées sur un scoring de tokens.
 * Robuste aux fautes de frappe et aux formes de mots grâce à normalize() + stemming léger.
 */
export function retrieveRelevantContext(
  query: string,
  knowledgeBase: KnowledgeBase
): string {
  const queryTokens = tokenize(query);
  const queryLower = normalize(query);
  const relevantSections: string[] = [];

  // TOUJOURS inclure le profil + contact comme base
  if (knowledgeBase.profile) {
    relevantSections.push(
      `PROFIL:\n- Nom: ${knowledgeBase.profile.name}\n- Titre: ${knowledgeBase.profile.title}\n- Bio: ${knowledgeBase.profile.bio}\n- Résumé: ${knowledgeBase.profile.summary}\n- Email: ${knowledgeBase.profile.email}\n- Téléphone: ${knowledgeBase.profile.phone}\n- Localisation: ${knowledgeBase.profile.location}\n- CV: ${knowledgeBase.profile.cv_url}`
    );
  }

  // EXPÉRIENCES : scorer chaque expérience et garder celles pertinentes (ou les 3 dernières)
  if (knowledgeBase.experiences?.length) {
    const scored = knowledgeBase.experiences.map((exp) => ({
      exp,
      score: scoreText(queryTokens, sectionToText(exp)),
    }));
    const relevant = scored.filter((s) => s.score >= 0.15).sort((a, b) => b.score - a.score);
    const toInclude = relevant.length > 0 ? relevant : scored.slice(0, 3);
    const experienceText = toInclude
      .map(({ exp }) => `- [${exp.period}] ${exp.position} @ ${exp.company} (${exp.type || ''}, ${exp.duration || ''}) : ${exp.description}\n  Réalisations: ${(exp.key_achievements || []).join(' ; ')}\n  Technologies: ${(exp.technologies || []).join(', ')}`)
      .join('\n');
    relevantSections.push(`EXPÉRIENCES PROFESSIONNELLES:\n${experienceText}`);
  }

  // PROJETS : scorer chaque projet
  if (knowledgeBase.projects?.length) {
    const scored = knowledgeBase.projects.map((proj) => ({
      proj,
      score: scoreText(queryTokens, sectionToText(proj)),
    }));
    const relevant = scored.filter((s) => s.score >= 0.15).sort((a, b) => b.score - a.score);
    const toInclude = relevant.length > 0 ? relevant : scored;
    const projectText = toInclude
      .map(({ proj }) => `- ${proj.title} [${proj.category}] : ${proj.description}\n  Fonctionnalités: ${(proj.key_features || []).join(' ; ')}\n  Technologies: ${(proj.technologies || []).join(', ')}\n  GitHub: ${proj.github || '—'} | Démo live: ${proj.live || '—'}`)
      .join('\n');
    relevantSections.push(`PROJETS (toujours citer GitHub/démo quand présents):\n${projectText}`);
  }

  // EXPERTISE
  if (knowledgeBase.expertise) {
    const expertiseText = `Compétences clés: ${(knowledgeBase.expertise.core_skills || []).join(', ')}.\nSpécialisations: ${(knowledgeBase.expertise.specializations || []).join(', ')}.\nBackend: ${(knowledgeBase.expertise.technical_expertise?.backend || []).join(', ')}.\nFrontend: ${(knowledgeBase.expertise.technical_expertise?.frontend || []).join(', ')}.\nMobile: ${(knowledgeBase.expertise.technical_expertise?.mobile || []).join(', ')}.\nIA/ML: ${(knowledgeBase.expertise.technical_expertise?.ai_ml || []).join(', ')}.\nData: ${(knowledgeBase.expertise.technical_expertise?.data || []).join(', ')}.\nDevOps: ${(knowledgeBase.expertise.technical_expertise?.devops || []).join(', ')}`;
    // Inclure si le score est pertinent ou si la requête est générique (peu de tokens)
    if (queryTokens.length === 0 || scoreText(queryTokens, expertiseText) >= 0.15 || queryTokens.some((t) => /^(net|react|ia|ai|python|docker|azure|langchain|llm|rag|ml|flutter|symfony|typescript|node|fastapi|sql|devop|cloud|stack|techno|compet|skill)/.test(t))) {
      relevantSections.push(`EXPERTISE TECHNIQUE:\n${expertiseText}`);
    }
  }

  // FORMATION
  if (knowledgeBase.education?.length) {
    const educationText = knowledgeBase.education
      .map((edu) => `- [${edu.year}] ${edu.degree} @ ${edu.institution}${edu.focus ? ` — Focus: ${edu.focus}` : ''}`)
      .join('\n');
    if (scoreText(queryTokens, sectionToText(knowledgeBase.education)) >= 0.15 || queryTokens.some((t) => /^(form|diplom|ecol|etud|master|licence|licence|diplom)/.test(t)) || queryTokens.length === 0) {
      relevantSections.push(`FORMATION ACADÉMIQUE:\n${educationText}`);
    }
  }

  // ACCOMPLISSEMENTS
  if (knowledgeBase.achievements?.length) {
    const achievementText = knowledgeBase.achievements
      .map((ach) => `- ${ach.title}: ${ach.description}`)
      .join('\n');
    if (scoreText(queryTokens, sectionToText(knowledgeBase.achievements)) >= 0.15 || queryTokens.some((t) => /^(award|hack|recompens|prix|accompl|realisat|succes)/.test(t))) {
      relevantSections.push(`ACCOMPLISSEMENTS:\n${achievementText}`);
    }
  }

  // FAQ : matcher sur les clés ET le contenu
  if (knowledgeBase.faqs) {
    for (const [faqKey, faqValue] of Object.entries(knowledgeBase.faqs)) {
      const keyWords = faqKey.replace(/_/g, ' ');
      if (queryLower.includes(keyWords) || scoreText(queryTokens, `${keyWords} ${faqValue}`) >= 0.4) {
        relevantSections.push(`RÉPONSE FAQ (${faqKey}) — s'en inspirer sans la recopier mot pour mot:\n${faqValue}`);
      }
    }
  }

  // Fallback : si très peu de contexte, inclure la knowledge base entière (elle est petite)
  if (relevantSections.length <= 2) {
    relevantSections.push(`BASE DE CONNAISSANCE COMPLÈTE:\n${JSON.stringify(knowledgeBase, null, 2)}`);
  }

  return relevantSections.join('\n\n---\n\n');
}

/**
 * Formatte le knowledge base pour être inclus dans le prompt
 */
export function formatKnowledgeBaseForPrompt(knowledgeBase: KnowledgeBase): string {
  const formatted = {
    'PROFIL': knowledgeBase.profile,
    'EXPERTISE CLÉS': knowledgeBase.expertise?.core_skills || [],
    'EXPÉRIENCES RÉCENTES': knowledgeBase.experiences?.slice(0, 3) || [],
    'PROJETS NOTABLES': knowledgeBase.projects?.slice(0, 3) || [],
    'CONTACT': {
      email: knowledgeBase.profile?.email,
      phone: knowledgeBase.profile?.phone,
      location: knowledgeBase.profile?.location,
    },
  };
  
  return JSON.stringify(formatted, null, 2);
}

/**
 * Service RAG public
 */
export const ragService = {
  /**
   * Récupère le contexte pertinent basé sur la requête utilisateur
   */
  getContext(query: string, knowledgeBase: KnowledgeBase): string {
    return retrieveRelevantContext(query, knowledgeBase);
  },

  /**
   * Formatte la knowledge base pour le prompt
   */
  formatContext(knowledgeBase: KnowledgeBase): string {
    return formatKnowledgeBaseForPrompt(knowledgeBase);
  },

  /**
   * Calcule la pertinence d'un texte par rapport à une requête
   */
  calculateRelevance(query: string, text: string): number {
    return calculateSimilarity(query, text);
  },
};
