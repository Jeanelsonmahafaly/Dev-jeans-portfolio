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
 * Calcule la similarité simple entre deux strings (score Dice)
 */
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = str1.toLowerCase().trim();
  const s2 = str2.toLowerCase().trim();
  
  if (s1 === s2) return 1;
  
  const longer = s1.length > s2.length ? s1 : s2;
  const shorter = s1.length > s2.length ? s2 : s1;
  
  if (longer.length === 0) return 1;
  
  const editDistance = getEditDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
}

/**
 * Calcule la distance d'édition de Levenshtein
 */
function getEditDistance(s1: string, s2: string): number {
  const costs: number[] = [];
  
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[s2.length] = lastValue;
  }
  
  return costs[s2.length];
}

/**
 * Récupère les sections pertinentes du knowledge base basées sur les mots-clés
 * VERSION AMÉLIORÉE : Extraction plus intelligente et complète
 */
export function retrieveRelevantContext(
  query: string,
  knowledgeBase: KnowledgeBase
): string {
  const queryLower = query.toLowerCase();
  const keywords = queryLower.split(/[\s,]+/).filter(k => k.length > 2);
  const relevantSections: string[] = [];
  
  // TOUJOURS inclure le profil comme base
  if (knowledgeBase.profile) {
    relevantSections.push(
      `PROFIL DE BASE: Nom: ${knowledgeBase.profile.name}, Titre: ${knowledgeBase.profile.title}, Bio: ${knowledgeBase.profile.bio}, Email: ${knowledgeBase.profile.email}, Téléphone: ${knowledgeBase.profile.phone}, Location: ${knowledgeBase.profile.location}`
    );
  }
  
  // Recherche intelligente sur l'expérience
  if (keywords.some(k => ['expérience', 'experience', 'travail', 'carrière', 'poste', 'entreprise', 'company', 'ans', 'années', 'cv'].includes(k))) {
    if (knowledgeBase.experiences?.length) {
      const experienceText = knowledgeBase.experiences
        .map(exp => `[${exp.period}] ${exp.position} @ ${exp.company}: ${exp.description}. Réalisations: ${exp.key_achievements?.join(', ')}. Tech: ${exp.technologies?.join(', ')}`)
        .join('\n');
      relevantSections.push(`EXPÉRIENCES PROFESSIONNELLES (${knowledgeBase.experiences.length} postes):\n${experienceText}`);
    }
  }
  
  // Recherche intelligente sur les projets
  if (keywords.some(k => ['projet', 'projects', 'portfolio', 'réalisé', 'travaux', 'iot', 'ia', 'feu', 'fire', 'smart', 'drim', 'fintech', 'classification', 'business', 'kintana', 'vtc', 'lien', 'link', 'github', 'live', 'disponible', 'online'].includes(k))) {
    if (knowledgeBase.projects?.length) {
      const projectText = knowledgeBase.projects
        .map(proj => `[${proj.category}] ${proj.title}: ${proj.description}. Features: ${proj.key_features?.join(', ')}. Technologies: ${proj.technologies?.join(', ')}. LIENS - GitHub: ${proj.github}, Démo Live: ${proj.live}`)
        .join('\n');
      relevantSections.push(`PROJETS NOTABLES (${knowledgeBase.projects.length} projets) - INCLURE SYSTÉMATIQUEMENT LES LIENS:\n${projectText}`);
    }
  }
  
  // Recherche intelligente sur les compétences IA
  if (keywords.some(k => ['compétence', 'competence', 'skill', 'technology', 'technologie', 'expertise', 'savoir', 'maitriser', 'ia', 'ai', 'ml', 'machine', 'learning', 'langchain', 'llm', 'rag', 'neural', '.net', 'react', 'python'].includes(k))) {
    if (knowledgeBase.expertise) {
      const expertiseText = `Core Skills: ${knowledgeBase.expertise.core_skills?.join(', ')}. Specializations: ${knowledgeBase.expertise.specializations?.join(', ')}. AI/ML: ${knowledgeBase.expertise.technical_expertise?.ai_ml?.join(', ')}. Backend: ${knowledgeBase.expertise.technical_expertise?.backend?.join(', ')}. Frontend: ${knowledgeBase.expertise.technical_expertise?.frontend?.join(', ')}`;
      relevantSections.push(`EXPERTISE TECHNIQUE:\n${expertiseText}`);
    }
  }
  
  // Recherche d'éducation
  if (keywords.some(k => ['formation', 'education', 'diplôme', 'école', 'études', 'master', 'licence'].includes(k))) {
    if (knowledgeBase.education?.length) {
      const educationText = knowledgeBase.education
        .map(edu => `[${edu.year}] ${edu.degree} @ ${edu.institution}${edu.focus ? ` - Focus: ${edu.focus}` : ''}`)
        .join('\n');
      relevantSections.push(`FORMATION ACADÉMIQUE:\n${educationText}`);
    }
  }
  
  // Recherche de contact
  if (keywords.some(k => ['contact', 'mail', 'email', 'téléphone', 'phone', 'appel', 'message', 'disponible', 'joindre'].includes(k))) {
    relevantSections.push(
      `CONTACT DIRECT: Email: ${knowledgeBase.profile?.email}, Téléphone: ${knowledgeBase.profile?.phone}, Location: ${knowledgeBase.profile?.location}`
    );
  }
  
  // Recherche d'achievements
  if (keywords.some(k => ['achievement', 'accomplissement', 'réussite', 'prix', 'award', 'hackathon'].includes(k))) {
    if (knowledgeBase.achievements?.length) {
      const achievementText = knowledgeBase.achievements
        .map(ach => `${ach.title}: ${ach.description}`)
        .join('\n');
      relevantSections.push(`ACCOMPLISSEMENTS:\n${achievementText}`);
    }
  }
  
  // Recherche FAQ spécifiques
  if (knowledgeBase.faqs) {
    for (const [faqKey, faqValue] of Object.entries(knowledgeBase.faqs)) {
      if (queryLower.includes(faqKey.replace(/_/g, ' ')) || queryLower.includes(faqKey)) {
        relevantSections.push(`RÉPONSE PRÉPARÉE (${faqKey}): ${faqValue}`);
      }
    }
  }
  
  // Si aucune section précise trouvée, inclure TOUTE la knowledge base
  // Car le contexte entier peut aider à générer une bonne réponse
  if (relevantSections.length <= 1) { // Seulement profil de base
    relevantSections.push(
      `CONTEXTE COMPLET: ${JSON.stringify(knowledgeBase, null, 2)}`
    );
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
