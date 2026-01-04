# ⚡ Quick Start - Chatbot IA en 5 minutes

## 1️⃣ Obtenir la clé API (2 min)

```bash
# Allez sur: https://platform.openai.com/api/keys
# Connectez-vous avec votre compte OpenAI
# Cliquez "Create new secret key"
# Copiez la clé (format: sk-proj-xxxxxxxxxxxxx...)
```

## 2️⃣ Configurer le projet (1 min)

```bash
# À la racine du projet, créer .env.local
echo "VITE_OPENAI_API_KEY=sk-xxxxxxxxxxxxx" > .env.local

# Remplacez sk-xxxxxxxxxxxxx par votre vraie clé!
```

## 3️⃣ Vérifier .gitignore (30 sec)

```bash
# Ouvrir .gitignore et vérifier que .env.local est dedans
# Si pas, ajouter:
echo ".env.local" >> .gitignore
```

## 4️⃣ Démarrer le serveur (1 min)

```bash
# Installer les dépendances (une fois)
npm install

# Démarrer le serveur de développement
npm run dev

# Ouvrir: http://localhost:5173
```

## 5️⃣ Tester! (30 sec)

```
1. Cliquer le bouton vert en bas à droite (💬)
2. Écrire: "Bonjour!"
3. Appuyer Entrée
4. Attendre la réponse...
5. 🎉 Ça marche!
```

---

## ✅ Vérifier la configuration

Voir **CHATBOT_GUIDE.md** si vous avez une erreur comme:
- "❌ La clé API n'est pas configurée"
- "❌ Erreur d'authentification"
- "⏱️ Limite d'utilisation atteinte"

---

## 📚 Documentation

| Fichier | Contenu |
|---------|---------|
| **CHATBOT_RESUME.md** | Vue d'ensemble complète |
| **CHATBOT_GUIDE.md** | Configuration & dépannage |
| **CHATBOT_IMPLEMENTATION.md** | Architecture technique |
| **CHATBOT_TEST_SCENARIOS.md** | Cas de test |

---

## 🎉 C'est fait!

Vous avez un chatbot IA intelligent sur votre portfolio.  
Les visiteurs peuvent maintenant discuter avec votre assistant!

**Questions à tester:**
- "Qui êtes-vous?"
- "Vos projets en IA?"
- "Comment vous contacter?"
- "Quelles sont vos compétences?"

---

**Besoin d'aide? Consultez CHATBOT_GUIDE.md** 📖
