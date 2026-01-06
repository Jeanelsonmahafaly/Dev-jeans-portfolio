# 🌍 Guide de Test - Détection Automatique de Langue

## ✅ Fonctionnalités Implémentées

### 1. **Détection Automatique de la Langue du Navigateur**
- ✅ Le site détecte automatiquement la langue du navigateur du visiteur
- ✅ Langues supportées : **Français (fr)** et **Anglais (en)**
- ✅ Langue par défaut : **Français** (si la langue détectée n'est pas supportée)
- ✅ La préférence de l'utilisateur est sauvegardée dans `localStorage`

### 2. **Ordre de Détection**
1. **localStorage** : Si l'utilisateur a déjà choisi une langue manuellement
2. **Navigateur** : Langue configurée dans le navigateur
3. **Fallback** : Français (par défaut)

---

## 🧪 Comment Tester la Détection Automatique

### **Test 1 : Première Visite (Détection Automatique)**

1. **Ouvrir le site en mode navigation privée** (pour éviter le cache)
   ```
   http://localhost:8083/
   ```

2. **Observer** :
   - Un petit popup en bas à droite apparaîtra pendant 10 secondes
   - Il affichera la langue du navigateur détectée
   - Le site s'affichera dans la langue correspondante

3. **Vérifier** :
   - Si votre navigateur est en **français** → Site en français 🇫🇷
   - Si votre navigateur est en **anglais** → Site en anglais 🇬🇧
   - Autre langue → Site en français (fallback) 🇫🇷

---

### **Test 2 : Changer la Langue du Navigateur**

#### **Sur Chrome/Edge :**
1. Ouvrir les paramètres : `chrome://settings/languages`
2. Ajouter ou déplacer une langue en première position
3. Redémarrer le navigateur
4. Ouvrir le site en mode privé
5. ✅ Le site devrait s'afficher dans la nouvelle langue

#### **Sur Firefox :**
1. Ouvrir les paramètres : `about:preferences#general`
2. Section "Langue" → Choisir une langue
3. Redémarrer le navigateur
4. Ouvrir le site en mode privé
5. ✅ Le site devrait s'afficher dans la nouvelle langue

---

### **Test 3 : Changement Manuel de Langue**

1. Ouvrir le site
2. Cliquer sur l'icône **🌐** dans la barre de navigation
3. Choisir une langue (Français ou English)
4. ✅ Le site change immédiatement de langue
5. ✅ La préférence est sauvegardée dans `localStorage`
6. **Recharger la page** → La langue choisie est conservée

---

### **Test 4 : Vérifier le localStorage**

1. Ouvrir la console du navigateur (F12)
2. Aller dans l'onglet **Application** (Chrome) ou **Stockage** (Firefox)
3. Chercher `localStorage` → `i18nextLng`
4. ✅ Vous devriez voir la langue active (`fr` ou `en`)

---

### **Test 5 : Réinitialiser la Détection**

Pour forcer une nouvelle détection automatique :

1. Ouvrir la console du navigateur (F12)
2. Exécuter cette commande :
   ```javascript
   localStorage.removeItem('i18nextLng');
   location.reload();
   ```
3. ✅ Le site détectera à nouveau la langue du navigateur

---

## 📧 Tracking des Visiteurs

Le système de tracking capture également la **langue du navigateur** du visiteur et l'envoie dans l'email de notification :

```
💻 INFORMATIONS SYSTÈME
━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Navigateur: Mozilla/5.0...
• Langue: fr-FR  ← Langue du navigateur
• Résolution écran: 1920x1080
```

---

## 🔧 Configuration Technique

### **Fichier de Configuration : `src/i18n/config.ts`**

```typescript
detection: {
  order: ['localStorage', 'navigator'],  // Ordre de détection
  caches: ['localStorage'],              // Sauvegarde de la préférence
  
  convertDetectedLanguage: (lng: string) => {
    if (lng.startsWith('en')) return 'en';  // en-US → en
    if (lng.startsWith('fr')) return 'fr';  // fr-FR → fr
    return 'fr';                            // Fallback
  }
}
```

### **Langues Supportées**
- 🇫🇷 **Français** (`fr`, `fr-FR`, `fr-CA`, etc.)
- 🇬🇧 **Anglais** (`en`, `en-US`, `en-GB`, etc.)

---

## 🎯 Résumé des Comportements

| Scénario | Résultat |
|----------|----------|
| **Première visite + Navigateur FR** | 🇫🇷 Site en français |
| **Première visite + Navigateur EN** | 🇬🇧 Site en anglais |
| **Première visite + Autre langue** | 🇫🇷 Site en français (fallback) |
| **Changement manuel de langue** | ✅ Langue choisie sauvegardée |
| **Visite suivante** | ✅ Langue précédemment choisie |
| **Effacement du localStorage** | 🔄 Nouvelle détection automatique |

---

## 🚀 Déploiement en Production

### **Retirer le Composant de Test**

Avant de déployer en production, **retirer** le composant `<LanguageDetectionInfo />` dans `src/pages/Index.tsx` :

```typescript
// À RETIRER EN PRODUCTION
<LanguageDetectionInfo />
```

### **Vérification Finale**

1. ✅ Tester avec plusieurs langues de navigateur
2. ✅ Vérifier que le changement manuel fonctionne
3. ✅ Vérifier que la préférence est sauvegardée
4. ✅ Tester en mode navigation privée
5. ✅ Vérifier que le tracking enregistre la langue

---

## 📝 Notes Importantes

### ⚠️ **Email du Visiteur**
**Il est IMPOSSIBLE** de récupérer automatiquement l'email d'un visiteur sans son consentement. Les navigateurs ne partagent jamais cette information pour des raisons de confidentialité.

**Solutions alternatives :**
- ✅ Formulaire de contact (avec consentement)
- ✅ Newsletter avec inscription volontaire
- ✅ Authentification OAuth (Google, Facebook, etc.)

### 🔒 **Confidentialité**
Le système de tracking capture des données personnelles. Assurez-vous de :
- ✅ Avoir une **politique de confidentialité**
- ✅ Être **conforme au RGPD**
- ✅ Informer les visiteurs du tracking

---

## 🎉 Résultat Final

Votre portfolio détecte maintenant automatiquement la langue du visiteur et s'adapte en conséquence ! 🌍

**Testez dès maintenant sur :** http://localhost:8083/

