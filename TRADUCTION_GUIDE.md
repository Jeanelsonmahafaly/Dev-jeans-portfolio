# 🌍 Guide de Traduction - Portfolio i18n

## ✅ Ce qui a été fait

### 1. Installation et Configuration
- ✅ **i18next** installé avec react-i18next et language detector
- ✅ Configuration dans `src/i18n/config.ts`
- ✅ Initialisation dans `src/main.tsx`

### 2. Fichiers de traduction
- ✅ `src/i18n/locales/fr.json` (Français)
- ✅ `src/i18n/locales/en.json` (English)

### 3. Composant de sélection de langue
- ✅ `src/components/LanguageSwitcher.tsx`
- ✅ Popup avec drapeaux 🇫🇷 🇬🇧
- ✅ Intégré dans la navigation (desktop + mobile)

### 4. Navigation traduite
- ✅ `src/components/Navigation.tsx` utilise `useTranslation()`
- ✅ Tous les liens de navigation sont traduits

## 📝 Comment traduire un composant

### Étape 1 : Importer useTranslation

```tsx
import { useTranslation } from 'react-i18next';

const MonComposant = () => {
  const { t } = useTranslation();
  
  // ...
}
```

### Étape 2 : Remplacer les textes

**Avant :**
```tsx
<h1>Développeur Full-Stack</h1>
<p>Plus de 2 ans d'expérience</p>
```

**Après :**
```tsx
<h1>{t('hero.title')}</h1>
<p>{t('hero.description')}</p>
```

## 🎯 Composants à traduire

### Priorité 1 (Essentiels)

#### ✅ Navigation.tsx
- Déjà traduit

#### 🔄 HeroSection.tsx
```tsx
// Ajouter en haut
import { useTranslation } from 'react-i18next';
const { t } = useTranslation();

// Remplacer :
"Développeur Full-Stack & IA" → {t('hero.subtitle')}
"Télécharger CV" → {t('hero.downloadCV')}
"Voir mes projets" → {t('hero.viewProjects')}
```

#### 🔄 AboutSection.tsx
```tsx
// Ajouter
const { t } = useTranslation();

// Remplacer :
"À Propos de Moi" → {t('about.title')}
"Années d'expérience" → {t('about.yearsExperience')}
"Développement .NET" → {t('about.skills.development')}
```

#### 🔄 ExperienceSection.tsx
```tsx
const { t } = useTranslation();

// Remplacer :
"Expérience Professionnelle" → {t('experience.title')}
"Responsabilités" → {t('experience.responsibilities')}
"Technologies utilisées" → {t('experience.technologies')}
```

#### 🔄 ProjectsSection.tsx
```tsx
const { t } = useTranslation();

// Remplacer :
"Mes Projets" → {t('projects.title')}
"Voir le projet" → {t('projects.viewProject')}
"Technologies" → {t('projects.technologies')}
```

#### 🔄 ContactSection.tsx
```tsx
const { t } = useTranslation();

// Remplacer :
"Me Contacter" → {t('contact.title')}
"Nom" → {t('contact.name')}
"Email" → {t('contact.email')}
"Envoyer" → {t('contact.send')}
```

### Priorité 2 (Secondaires)

- Skills.tsx
- Education.tsx
- Footer.tsx
- Chatbot.tsx

## 📋 Exemple complet : HeroSection.tsx

```tsx
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  
  return (
    <section>
      <h1>{t('hero.greeting')}</h1>
      <h2>{t('hero.name')}</h2>
      <p>{t('hero.subtitle')}</p>
      <p>{t('hero.description')}</p>
      
      <button onClick={downloadCV}>
        {t('hero.downloadCV')}
      </button>
      
      <a href="#projects">
        {t('hero.viewProjects')}
      </a>
    </section>
  );
};
```

## 🔍 Vérification

### Tester le changement de langue

1. Lancer l'application : `npm run dev`
2. Cliquer sur l'icône 🌐 dans la navigation
3. Sélectionner Français 🇫🇷 ou English 🇬🇧
4. Vérifier que tous les textes changent

### Debug

Si les traductions ne s'affichent pas :

1. Vérifier que `import './i18n/config'` est dans `main.tsx`
2. Vérifier que les clés existent dans fr.json et en.json
3. Ouvrir la console : les erreurs i18next s'affichent
4. Vérifier que `useTranslation()` est appelé dans le composant

## 🎨 Sélecteur de langue

### Position
- **Desktop** : À côté du thème (clair/sombre) dans la navigation
- **Mobile** : Dans le menu hamburger

### Apparence
- Icône 🌐 (Globe)
- Drapeau du pays en petit badge
- Popup avec liste des langues
- Checkmark ✓ sur la langue active

## 📦 Structure des fichiers

```
src/
├── i18n/
│   ├── config.ts          # Configuration i18next
│   └── locales/
│       ├── fr.json        # Traductions françaises
│       └── en.json        # Traductions anglaises
├── components/
│   ├── LanguageSwitcher.tsx  # Sélecteur de langue
│   ├── Navigation.tsx        # ✅ Traduit
│   ├── HeroSection.tsx       # 🔄 À traduire
│   ├── AboutSection.tsx      # 🔄 À traduire
│   └── ...
└── main.tsx              # ✅ i18n initialisé
```

## 🚀 Prochaines étapes

1. ✅ Navigation traduite
2. 🔄 Traduire HeroSection
3. 🔄 Traduire AboutSection
4. 🔄 Traduire ExperienceSection
5. 🔄 Traduire ProjectsSection
6. 🔄 Traduire ContactSection
7. 🔄 Traduire Footer
8. 🔄 Traduire Chatbot

## 💡 Conseils

- **Toujours tester** après chaque traduction
- **Garder les clés cohérentes** entre fr.json et en.json
- **Utiliser des clés descriptives** : `hero.downloadCV` plutôt que `btn1`
- **Grouper par section** : `nav.*`, `hero.*`, `about.*`
- **Ne pas oublier** les placeholders, tooltips, aria-labels

---

**Statut** : ✅ Configuration terminée, traduction en cours
**Langues** : 🇫🇷 Français | 🇬🇧 English
**Composants traduits** : 1/10

