# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Feature-Sliced + Redux Toolkit Setup

This project has been updated to use a lightweight Feature-Sliced structure with Redux Toolkit and RTK Query.

Folders:
- src/app – app-wide store and hooks
- src/entities – low-level reusable domain entities (e.g., counter)
- src/features – user-facing slices that combine entities and API (e.g., todos)
- src/pages – route-level pages (e.g., Home)
- src/shared – shared utilities and API base

Key files:
- src/app/store.ts – configureStore with counter slice and RTK Query baseApi
- src/app/hooks.ts – typed useDispatch/useSelector
- src/shared/api/baseApi.ts – RTK Query base API
- src/entities/counter/* – counter slice + UI
- src/features/todos/api/todosApi.ts – todos query using baseApi
- src/pages/Home.tsx – demo page wiring Counter and todos list
- public/todos.json – static mock used by the todos query

Running locally:
1) Install dependencies: npm install
2) Start dev server: npm run dev

RTK Query base URL:
- baseUrl defaults to "/", so queries like "todos.json" are served from Vite's public/ folder.
- To point to a real API, create a .env with VITE_API_URL=https://your.api/ and change queries accordingly (e.g., query: () => 'todos').
