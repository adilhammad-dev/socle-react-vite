# Socle React Vite

Socle (boilerplate) pour projets React modernes avec Vite, intégrant les meilleures pratiques de développement, une architecture scalable et un stack technologique complet.

## Caractéristiques

- ⚡ **Vite** : Build tool ultra-rapide et serveur de développement optimisé
- ⚛️ **React 19** : Dernière version du framework avec améliorations de performance
- 🎨 **Material UI + Styled-components** : Composants pré-stylisés et CSS-in-JS
- 📋 **React Hook Form + Yup** : Gestion légère et validation robuste des formulaires
- 🔒 **Azure AD/Entra** : Authentification enterprise via MSAL
- 🌐 **Redux Toolkit + React Query** : Gestion d'état global et cache API performant
- 🔌 **Axios** : Client HTTP moderne pour requêtes API
- 📅 **Date-fns** : Manipulation et formatage des dates
- 🏗️ **Architecture scalable** : Structure de projet claire et maintenable

## Installation

```bash
git clone <repository-url>
cd socle-react-vite
npm install
```

## Commandes disponibles

```bash
# Démarrage en développement
npm run dev

# Build production
npm run build

# Prévisualiser la build
npm run preview

# Lancer les tests
npm run test

# Linter le code
npm run lint
```

## Stack Technologique

| Catégorie | Bibliothèques |
|-----------|--------------|
| **Framework** | React 19, Vite |
| **UI** | Material UI 7.x, Styled-components, Emotion |
| **Formulaires** | React Hook Form, Yup, @hookform/resolvers |
| **État** | Redux Toolkit, React Redux |
| **Données** | TanStack React Query |
| **Authentification** | MSAL Browser, MSAL React (Azure AD) |
| **HTTP** | Axios |
| **Utilitaires** | Date-fns |

## Structure du projet

```
socle-react-vite/
├── src/
│   ├── components/        # Composants réutilisables
│   ├── pages/            # Pages principales
│   ├── store/            # Configuration Redux
│   ├── hooks/            # Custom hooks
│   ├── services/         # Services API et utilitaires
│   ├── styles/           # Styles globaux
│   └── App.jsx
├── public/               # Assets statiques
├── package.json
└── vite.config.js
```

## Démarrer un nouveau projet

1. Cloner ce repository
2. Installer les dépendances : `npm install`
3. Configurer les variables d'environnement
4. Lancer le serveur de développement : `npm run dev`
5. Commencer à développer dans le dossier `src/`

## Configuration Azure AD

Mettre à jour le fichier de configuration avec vos credentials Azure AD/Entra :

```javascript
const msalConfig = {
  auth: {
    clientId: "YOUR_CLIENT_ID",
    authority: "https://login.microsoftonline.com/YOUR_TENANT_ID",
    redirectUri: "http://localhost:5173"
  }
};
```

## Bonnes pratiques

- Utiliser React Hook Form pour les formulaires
- Valider avec Yup pour une sécurité accrue
- Gérer l'état global avec Redux Toolkit pour les données importantes
- Utiliser React Query pour les requêtes API et le caching
- Composer les composants Material UI selon vos besoins
- Documenter les composants complexes

## Contribution

Les contributions sont bienvenues ! Merci de suivre les conventions de code du projet.

## Licence

MIT
