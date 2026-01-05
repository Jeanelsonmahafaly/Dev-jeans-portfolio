# 📧 Configuration Web3Forms

## ✅ Configuration terminée

Le formulaire de contact utilise maintenant **Web3Forms** pour envoyer les emails.

### 🔑 Clé API

La clé API est stockée dans le fichier `.env.local` :

```env
VITE_WEB3FORMS_ACCESS_KEY=fca009fa-12f4-4061-869e-91225269c832
```

### 📁 Fichiers modifiés

1. ✅ **`.env.local`** - Contient la clé API (non commité dans Git)
2. ✅ **`.env.example`** - Template pour les autres développeurs
3. ✅ **`src/components/ContactSection.tsx`** - Intégration Web3Forms

### 🚀 Comment ça fonctionne

Quand un utilisateur remplit le formulaire :

1. Les données sont envoyées à `https://api.web3forms.com/submit`
2. Web3Forms envoie un email à l'adresse configurée
3. L'utilisateur reçoit une confirmation visuelle (toast)

### 📊 Données envoyées

- `name` : Nom de l'utilisateur
- `email` : Email de l'utilisateur
- `subject` : Sujet du message
- `message` : Message détaillé
- `from_name` : "Portfolio Contact Form" (identifiant)

### 🧪 Tester le formulaire

1. Ouvrez **http://localhost:8081/**
2. Allez à la section **Contact**
3. Remplissez le formulaire
4. Cliquez sur **Envoyer le message**
5. Vérifiez :
   - ✅ Toast de succès apparaît
   - ✅ Formulaire se vide
   - ✅ Email reçu dans votre boîte mail

### 🔧 Changer la clé API

Si vous voulez utiliser votre propre clé :

1. Allez sur https://web3forms.com
2. Créez un compte gratuit
3. Obtenez votre clé API
4. Modifiez `.env.local` :
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=votre_nouvelle_cle
   ```
5. Redémarrez le serveur : `npm run dev`

### 📧 Configuration de l'email de réception

Pour configurer l'email où vous recevrez les messages :

1. Connectez-vous sur https://web3forms.com
2. Allez dans votre dashboard
3. Configurez l'email de destination
4. Personnalisez le template d'email (optionnel)

### ⚠️ Important

- ✅ Le fichier `.env.local` est déjà dans `.gitignore`
- ✅ Ne partagez jamais votre clé API publiquement
- ✅ Utilisez `.env.example` comme template pour les autres développeurs

### 🎉 Avantages de Web3Forms

- ✅ Gratuit jusqu'à 250 emails/mois
- ✅ Pas de backend nécessaire
- ✅ Protection anti-spam intégrée
- ✅ Notifications par email
- ✅ Dashboard pour voir les soumissions
- ✅ Personnalisation des templates

### 🐛 Dépannage

**Erreur : "Access key is required"**
- Vérifiez que `.env.local` existe
- Vérifiez que la variable commence par `VITE_`
- Redémarrez le serveur

**Emails non reçus**
- Vérifiez votre dossier spam
- Vérifiez la configuration sur web3forms.com
- Vérifiez que la clé API est valide

**Erreur CORS**
- Web3Forms gère automatiquement CORS
- Pas de configuration nécessaire

