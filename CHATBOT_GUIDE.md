# 🤖 Guide d'Integration du Chatbot IA - Portfolio Jean Elson

## 📋 Vue d'ensemble

Ce portfolio utilise un **chatbot IA conversationnel 100% côté client** (front-only) sans backend. Il utilise OpenAI GPT-4 avec une approche **RAG léger** pour fournir des réponses contextualisées basées sur les données du portfolio.

### Architecture

```
┌─────────────────┐
│   Utilisateur   │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────┐
│  Composant Chatbot React    │
│  (src/components/Chatbot.tsx)│
└────────┬────────────────────┘
         │
         ├─────────────────────────────┐
         │                             │
         ▼                             ▼
  ┌──────────────────┐      ┌──────────────────┐
  │  RAG Service     │      │  OpenAI Service  │
  │ (ragService.ts)  │      │(openaiService.ts)│
  └────────┬─────────┘      └────────┬─────────┘
           │                         │
           ▼                         ▼
  ┌──────────────────┐      ┌──────────────────┐
  │ Knowledge.json   │      │  OpenAI API      │
  │ (données locales)│      │  (gpt-4-turbo)   │
  └──────────────────┘      └──────────────────┘
```

## 🚀 Configuration (1ère fois)

### Prérequis
- Compte OpenAI (https://platform.openai.com)
- Clé API OpenAI valide avec accès à GPT-4
- Crédits disponibles sur le compte OpenAI

### Étape 1: Obtenir la clé OpenAI

1. Allez sur [https://platform.openai.com/api/keys](https://platform.openai.com/api/keys)
2. Créez une nouvelle clé secrète
3. Copiez-la (vous ne pourrez plus la voir après!)
4. ⚠️ **NE JAMAIS la commiter sur GitHub**

### Étape 2: Configuration locale

1. **Créer/Modifier `.env.local`** à la racine du projet:

```env
# .env.local (NE PAS VERSIONNER)
VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

2. Assurez-vous que `.env.local` est dans `.gitignore`:

```
.env.local
.env.*.local
```

### Étape 3: Redémarrer le serveur

```bash
npm run dev
```

## 📁 Structure des fichiers

```
src/
├── components/
│   └── Chatbot.tsx              # Composant principal UI
├── services/
│   ├── openaiService.ts         # Appels API OpenAI
│   └── ragService.ts            # Recherche RAG léger
├── data/
│   └── knowledge.json           # Base de connaissances
└── pages/
    └── Index.tsx                # Intégration du chatbot
```

## 🧠 Fonctionnement du RAG (Retrieval-Augmented Generation)

### Comment ça marche

1. **Utilisateur pose une question** → "Parlez-moi de vos projets"

2. **RAG Service extrait les infos pertinentes** du `knowledge.json`:
   - Analyse les mots-clés de la requête
   - Recherche les sections correspondantes
   - Construit un contexte enrichi

3. **Contexte envoyé à OpenAI**:
   ```
   Système: "Tu es l'assistant de Jean..."
   Contexte: [Profil, Expériences, Projets relevants]
   Requête: "Parlez-moi de vos projets"
   ```

4. **OpenAI génère une réponse naturelle** basée UNIQUEMENT sur le contexte fourni

### Avantages

✅ **Pas d'hallucination**: Les réponses sont 100% basées sur les données réelles  
✅ **Pas de backend**: Tout fonctionne côté client  
✅ **Contrôle total**: Vous contrôlez les données dans `knowledge.json`  
✅ **Sécurité**: Pas de données stockées sur serveur  
✅ **Performance**: Recherche instantanée + appel API unique  

## 📝 Modifier la knowledge base

Tous vos données sont dans **`src/data/knowledge.json`**

### Structure du JSON

```json
{
  "profile": {
    "name": "Votre nom",
    "title": "Votre titre",
    "email": "votre@email.com",
    ...
  },
  "expertise": {
    "core_skills": [...],
    "technical_expertise": {...},
    ...
  },
  "experiences": [...],
  "projects": [...],
  "education": [...],
  "faqs": {...}
}
```

### Pour ajouter un projet

```json
{
  "projects": [
    {
      "title": "Nom du projet",
      "category": "Type",
      "description": "Description détaillée",
      "key_features": ["Feature 1", "Feature 2"],
      "technologies": ["Tech 1", "Tech 2"],
      "github": "https://github.com/...",
      "live": "https://..."
    }
  ]
}
```

### Pour mettre à jour une expérience

Modifiez la section `experiences` avec les détails courants.

## 🔐 Sécurité

### Bonnes pratiques

1. **Ne JAMAIS versionner la clé API**
   ```bash
   # .gitignore doit contenir:
   .env.local
   .env.*.local
   ```

2. **Clé API en production**
   - Utilisez les secrets de votre plateforme (Vercel, Netlify)
   - Ou un backend qui expose les appels OpenAI

3. **Limiter les appels API**
   - Ajouter un rate limiting client
   - Monitorer l'utilisation sur OpenAI Dashboard

4. **Pas d'infos sensibles** dans `knowledge.json`
   - Pas de tokens
   - Pas de clés privées
   - Pas d'infos confidentielles

## 🛠️ Dépannage

### "La clé API n'est pas configurée"

```
❌ Erreur: La clé API OpenAI n'est pas configurée.
```

**Solution:**
1. Vérifiez `.env.local` existe
2. Vérifiez `VITE_OPENAI_API_KEY=sk-...` est présent
3. Redémarrez le serveur (`npm run dev`)

### "Erreur d'authentification"

```
❌ Erreur d'authentification: La clé API OpenAI est invalide.
```

**Solution:**
1. Vérifiez la clé sur https://platform.openai.com/api/keys
2. Vérifiez qu'elle n'a pas été révoquée
3. Créez une nouvelle clé si nécessaire

### "Limite d'utilisation atteinte"

```
⏱️ Limite d'utilisation atteinte. Veuillez réessayer dans quelques instants.
```

**Solution:**
1. Attendez quelques secondes
2. Vérifiez votre quota sur OpenAI Dashboard
3. Ajoutez des crédits si nécessaire

### Le chatbot répond "Je n'ai pas cette information"

**Cause:** L'info n'existe pas dans `knowledge.json`

**Solution:**
1. Modifiez `src/data/knowledge.json`
2. Ajoutez l'info manquante
3. Testez à nouveau (pas besoin de redémarrer)

## 📊 Monitoring et coûts

### Monitorer les appels

1. Accédez à https://platform.openai.com/account/usage/overview
2. Voir le nombre d'appels et la facture estimée
3. Vérifier les coûts par modèle

### Coûts OpenAI (GPT-4 Turbo)

- **Entrée:** $0.01 / 1K tokens
- **Sortie:** $0.03 / 1K tokens

*Estimation:* ~500 messages ≈ $0.50 - $1.00

### Optimisations

1. **Limiter la taille du contexte** → Moins de tokens
2. **Caching côté client** → Mémoriser les réponses
3. **Batch requests** → Regrouper les appels
4. **Utiliser GPT-3.5 Turbo** → Moins cher (optional)

## 🎯 Cas d'usage

### Questions que le chatbot peut répondre

✅ "Parlez-moi de votre expérience"  
✅ "Quels sont vos projets récents ?"  
✅ "Quelles technologies maîtrisez-vous ?"  
✅ "Comment vous contacter ?"  
✅ "Quel est votre parcours ?"  
✅ "Pouvez-vous intégrer l'IA dans mon projet ?"  

### Questions où il demande clarification

❓ "Avez-vous d'autres informations ?"  
❓ "Pouvez-vous être plus spécifique ?"  
❓ "Quelle technologie vous intéresse ?"  

### Questions hors scope

❌ "Quel est le meilleur restaurant ?"  
❌ "Parlez-moi de politique"  
❌ "Faites mes devoirs"  

## 📚 Ressources

- [OpenAI API Documentation](https://platform.openai.com/docs/api-reference)
- [GPT-4 Turbo Documentation](https://platform.openai.com/docs/models)
- [RAG Pattern](https://aws.amazon.com/what-is/retrieval-augmented-generation/)
- [Vite Env Variables](https://vitejs.dev/guide/env-and-mode.html)

## 🚀 Déploiement en production

### Sur Vercel

1. **Ajouter la variable d'environnement:**
   - Aller à Settings → Environment Variables
   - Ajouter `VITE_OPENAI_API_KEY` avec votre clé

2. **Redéployer:**
   ```bash
   git push
   ```

### Sur Netlify

1. **Ajouter la variable d'environnement:**
   - Aller à Site Settings → Build & Deploy → Environment
   - Ajouter `VITE_OPENAI_API_KEY`

2. **Redéployer:**
   ```bash
   # Faire un commit et push
   git push
   ```

## ✅ Checklist avant de partager

- [ ] Clé API dans `.env.local` (pas committée)
- [ ] `.env.local` dans `.gitignore`
- [ ] `knowledge.json` mis à jour avec vos infos
- [ ] Testé localement en mode sombre ET clair
- [ ] Testé sur mobile
- [ ] Vérifié les coûts OpenAI
- [ ] Messages système cohérents avec votre profil

## 📞 Support

Si vous avez des questions:

1. Vérifiez la [documentation OpenAI](https://platform.openai.com/docs)
2. Consultez les [logs du navigateur](https://developer.chrome.com/docs/devtools/console/)
3. Vérifiez votre console serveur: `npm run dev`

---

**Créé avec ❤️ pour Jean Elson | Dernière mise à jour: Janvier 2026**
