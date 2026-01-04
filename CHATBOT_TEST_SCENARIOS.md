# 🧪 Guide de test du Chatbot IA

## Instructions de test

1. **Lancer le serveur:** `npm run dev`
2. **Ouvrir le portfolio:** http://localhost:5173
3. **Cliquer** sur le bouton vert en bas à droite
4. **Poser une question** parmi les exemples ci-dessous
5. **Vérifier** que la réponse est pertinente et basée sur `knowledge.json`

---

## ✅ Questions recommandées (en français)

### 👤 Profil & Présentation

```
"Bonjour, qui êtes-vous ?"
→ Attend: Introduction avec nom, titre, location

"Parlez-moi un peu de vous"
→ Attend: Résumé du profil + expérience

"Quel est votre titre ?"
→ Attend: "Développeur .NET & Ingénieur IA"

"Où êtes-vous basé ?"
→ Attend: "Antananarivo, Madagascar"
```

### 💼 Expérience professionnelle

```
"Combien d'années d'expérience avez-vous ?"
→ Attend: "2+ ans", mentions des ESN (ILOMAD, RTS LINE, ARATO)

"Quel est votre entreprise actuelle ?"
→ Attend: "ILOMAD" (June 2025 - present)

"Quels postes avez-vous occupés ?"
→ Attend: Développeur .NET, Fullstack, Agent IA, Backend

"Parlez-moi de votre expérience chez RTS LINE"
→ Attend: Détails sur développement Fullstack Symfony

"Quels sont les technologies que vous avez utilisées ?"
→ Attend: Liste complète (.NET, React, Angular, Docker, etc.)
```

### 🎯 Projets

```
"Quels sont vos projets ?"
→ Attend: Tous les 5 projets (Smart Fire Guard, DRIM VTC, FINTECH, etc.)

"Parlez-moi du projet Smart Fire Guard"
→ Attend: IoT, détection incendie, IA/ML, LangChain, ESP32

"Avez-vous des projets en IA ?"
→ Attend: Smart Fire Guard, Classification images, Chatbot

"Quels sont vos projets mobiles ?"
→ Attend: FINTECH (Flutter), Business Kintana (Flutter)

"Avez-vous du code source ?"
→ Attend: Liens GitHub et démo pour Smart Fire Guard

"Montrez-moi vos réalisations récentes"
→ Attend: Projets entre Nov 2024 et aujourd'hui
```

### 🧠 Compétences & Technologies

```
"Quelles sont vos compétences ?"
→ Attend: .NET, React, IA/ML, Architectures microservices

"Maîtrisez-vous React ?"
→ Attend: "Oui" + exemples de projets React

"Avez-vous des compétences en IA/ML ?"
→ Attend: LangChain, RAG, LLMs, Scikit-learn, TensorFlow

"Vous connaissez Docker ?"
→ Attend: "Oui" + contexte Kubernetes, déploiement

"Quelles bases de données connaissez-vous ?"
→ Attend: MySQL, MongoDB, Oracle, SQL Server

"Avez-vous de l'expérience avec Azure ?"
→ Attend: "Oui" + App Service, SQL Database, Azure DevOps

"Python, c'est votre point fort ?"
→ Attend: Oui pour IA/ML, Data Science, FastAPI
```

### 🎓 Formation & Apprentissage

```
"Quelle est votre formation ?"
→ Attend: M2 Ingénierie des Systèmes Informatiques à ESMT

"Vous avez un diplôme ?"
→ Attend: Master 2 + Licence en Informatique

"Où avez-vous étudié ?"
→ Attend: "ESMT" (École Supérieure Madagascar Technologie)
```

### 📞 Contact

```
"Comment vous contacter ?"
→ Attend: Email et téléphone

"Quel est votre email ?"
→ Attend: "jelsonmahafaly@gmail.com"

"Pouvez-vous me donner votre numéro ?"
→ Attend: "+261 34 21 166 56"

"Comment je vous envoie un message ?"
→ Attend: Email, téléphone, formulaire contact (indiqué)
```

### 🚀 Services & Collaboration

```
"Pouvez-vous intégrer l'IA dans mon projet ?"
→ Attend: "Oui" + détails sur intégration IA

"Faites-vous du consulting ?"
→ Attend: Oui, disponible pour divers projets

"Vous développez quoi exactement ?"
→ Attend: Backend, Frontend, Mobile, IA, Architectures

"Travaillez-vous en freelance ?"
→ Attend: À clarifier (actuellement CDI ILOMAD)
```

### 🎯 Questions complexes

```
"Comment combinez-vous .NET et IA ?"
→ Attend: RAG, LangChain, intégration LLMs dans services .NET

"Vous faites de l'automation intelligente ?"
→ Attend: "Oui" + N8N, workflows, LLMs

"Pouvez-vous créer un chatbot pour mon site ?"
→ Attend: Mention de ce chatbot en exemple + possibilité

"Avez-vous experience avec les IoT ?"
→ Attend: Smart Fire Guard + ESP32 + edge computing

"Vous connaissez les patterns microservices ?"
→ Attend: Oui + exemples (Docker, Kubernetes, Azure)
```

---

## ⚠️ Questions limites (comportement attendu)

### Hors scope
```
"Quel est le meilleur restaurant à Antananarivo ?"
→ Attend: "Je n'ai pas cette information"

"Aidez-moi avec mes devoirs"
→ Attend: Redirection vers profil Jean Elson

"Quelle est la capitale du Madagascar ?"
→ Attend: Honnête redirection
```

### Ambigus
```
"Vous faites du machine learning ?"
→ Attend: Clarification + exemples (classification images, anomalies)

"Vous avez de l'expérience en IA ?"
→ Attend: Détails sur RAG, LLMs, NLP, classification
```

### Incohérents
```
"Vous travaillez chez Google ?"
→ Attend: "Non, je travaille chez ILOMAD"

"Vous avez 20 ans d'expérience ?"
→ Attend: "Non, 2+ ans"
```

---

## 🐛 Scenarios de test (QA)

### Test 1: Configuration API
```
Action: Ouvrir le chatbot sans clé API
Résultat attendu: Message d'erreur clair
Message: "❌ Erreur: La clé API OpenAI n'est pas configurée."
```

### Test 2: Connexion API invalide
```
Action: Utiliser une clé API invalide
Résultat attendu: Erreur d'authentification
Message: "❌ Erreur d'authentification: La clé API OpenAI est invalide."
```

### Test 3: Contexte vide
```
Action: Poser une question sans données pertinentes
Résultat attendu: Réponse honnête
Message: "Je n'ai pas cette information en détail..."
```

### Test 4: Performance
```
Action: Envoyer 5 messages rapides
Résultat attendu: Tous les appels fonctionnent
Performance: < 5 secondes par réponse
```

### Test 5: Responsive
```
Action: Ouvrir sur mobile (320px)
Résultat attendu: Chat window adaptée
Vérifier: Boutons lisibles, texte pas coupé, scrollable
```

### Test 6: Mode sombre
```
Action: Activer mode sombre dans Navigation
Résultat attendu: Chatbot change de couleurs
Vérifier: Texte lisible, contraste OK
```

### Test 7: Historique conversation
```
Action: Poser 3 questions consécutives
Résultat attendu: Tout l'historique visible
Vérifier: Scroll, ordre chrono, timestamps
```

### Test 8: Injection SQL (sécurité)
```
Action: Envoyer: "'; DROP TABLE knowledge; --"
Résultat attendu: Traité comme question normale
Vérifier: Pas d'erreur JS, pas de crash
```

---

## 📊 Critères d'acceptance

### Réponse doit être:
- ✅ **Pertinente** → Basée sur `knowledge.json`
- ✅ **Complète** → Pas de réponses vides
- ✅ **Naturelle** → Pas de JSON visible
- ✅ **Professionnelle** → Ton approprié
- ✅ **Actuelle** → 2025-2026
- ✅ **Honnête** → Pas de données inventées

### UI doit être:
- ✅ **Responsive** → Fonctionne sur tous écrans
- ✅ **Accessible** → Clavier + lecteur d'écran
- ✅ **Performante** → < 5s par réponse
- ✅ **Ergonomique** → Clair et intuitif
- ✅ **Thématisée** → Mode clair/sombre

---

## 🎬 Scénario de test complet (5 min)

```
1. Ouvrir http://localhost:5173
2. Cliquer le bouton chat (bas droite)
3. Poser: "Qui êtes-vous ?"
   ✅ Attend: Réponse avec profil
   
4. Poser: "Vos compétences en IA ?"
   ✅ Attend: RAG, LLMs, LangChain

5. Poser: "Avez-vous un Discord ?"
   ✅ Attend: "Je n'ai pas cette info"

6. Poser: "Montrer-moi vos projets"
   ✅ Attend: Tous les 5 projets

7. Activer mode sombre
   ✅ Chatbot change de couleur

8. Poser sur mobile (shrink screen)
   ✅ Interface adaptée

9. Vérifier les timestamps
   ✅ Tous les messages ont des heures

10. Vérifier console (F12)
    ✅ Pas d'erreur JavaScript
```

---

## 📋 Checklist avant déploiement

- [ ] Tous les tests ci-dessus passent
- [ ] Pas d'erreurs dans la console
- [ ] Clé API fonctionne
- [ ] Mode clair/sombre OK
- [ ] Mobile responsive OK
- [ ] knowledge.json à jour
- [ ] .env.local dans .gitignore
- [ ] Documentation lue et comprise

---

**Prêt à tester? Lancez `npm run dev` et commencez!** 🚀
