# 📧 Configuration de l'email de réception Web3Forms

## 🎯 Pour recevoir les messages du portfolio dans VOTRE boîte mail

### **Étape 1 : Créer/Se connecter à Web3Forms**

1. Allez sur : **https://web3forms.com**
2. Cliquez sur **"Get Started Free"** ou **"Sign In"**
3. Créez un compte avec votre email : **jelsonmahafaly@gmail.com**

### **Étape 2 : Créer un nouveau formulaire**

1. Une fois connecté, cliquez sur **"Create New Form"**
2. Donnez un nom : **"Portfolio Contact Form"**
3. Entrez votre email de réception : **jelsonmahafaly@gmail.com**
4. Cliquez sur **"Create"**

### **Étape 3 : Obtenir votre clé API**

1. Après création, vous verrez votre **Access Key**
2. Copiez cette clé (format : `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
3. Remplacez la clé actuelle dans `.env.local` :

```env
VITE_WEB3FORMS_ACCESS_KEY=VOTRE_NOUVELLE_CLE_ICI
```

### **Étape 4 : Configurer les options (optionnel)**

Dans le dashboard Web3Forms, vous pouvez :

- ✅ **Email de réception** : jelsonmahafaly@gmail.com
- ✅ **Nom de l'expéditeur** : Portfolio Contact Form
- ✅ **Email de réponse** : Utiliser l'email du visiteur
- ✅ **Redirection après soumission** : Désactivée (on gère avec React)
- ✅ **Protection anti-spam** : Activée (honeypot + reCAPTCHA optionnel)
- ✅ **Notifications** : Activées

### **Étape 5 : Personnaliser le template d'email (optionnel)**

Vous pouvez personnaliser comment vous recevez les emails :

```
Sujet : Nouveau message depuis le Portfolio

De : {name} <{email}>

Sujet : {subject}

Message :
{message}

---
Envoyé depuis : Portfolio Contact Form
Date : {date}
```

### **Étape 6 : Tester**

1. Redémarrez le serveur : `npm run dev`
2. Allez sur http://localhost:8081
3. Remplissez le formulaire de contact
4. Cliquez sur "Envoyer le message"
5. **Vérifiez votre boîte mail** : jelsonmahafaly@gmail.com

### 📧 **Exemple d'email que vous recevrez**

```
De : Portfolio Contact Form <noreply@web3forms.com>
Répondre à : test@example.com
À : jelsonmahafaly@gmail.com

Sujet : Test depuis le portfolio

---

Nom : Jean Test
Email : test@example.com
Sujet : Test depuis le portfolio

Message :
Bonjour, je souhaite discuter d'un projet avec vous.

---
Envoyé depuis Portfolio Contact Form
Date : 2026-01-05 15:30:00
```

### ⚠️ **Important**

1. **Vérifiez vos spams** la première fois
2. Ajoutez `noreply@web3forms.com` à vos contacts
3. La clé actuelle (`fca009fa-12f4-4061-869e-91225269c832`) est peut-être déjà configurée
4. Si c'est votre clé, **vous recevez déjà les emails** ! 🎉

### 🧪 **Test rapide**

Pour vérifier si la clé actuelle est la vôtre :

1. Allez sur https://web3forms.com
2. Connectez-vous
3. Regardez vos formulaires existants
4. Si vous voyez la clé `fca009fa-12f4-4061-869e-91225269c832`, c'est bon !
5. Sinon, créez un nouveau formulaire et remplacez la clé

### 🎉 **Une fois configuré**

Tous les messages du formulaire de contact arriveront directement dans votre boîte mail :
- ✅ **jelsonmahafaly@gmail.com**
- ✅ Avec le nom et l'email de l'expéditeur
- ✅ Vous pourrez répondre directement depuis votre boîte mail

### 📊 **Dashboard Web3Forms**

Vous aurez aussi accès à un dashboard pour :
- 📧 Voir tous les messages reçus
- 📊 Statistiques d'utilisation
- 🔒 Gérer la sécurité anti-spam
- ⚙️ Configurer les notifications
- 📝 Exporter les données

### 🆓 **Plan gratuit**

- ✅ 250 soumissions/mois
- ✅ Notifications par email
- ✅ Protection anti-spam
- ✅ Dashboard de gestion
- ✅ Support par email

C'est largement suffisant pour un portfolio personnel ! 🚀

