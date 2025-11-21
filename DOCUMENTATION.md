# Full Project Documentation

## 📖 Introduction

This project is a robust, enterprise-grade React boilerplate designed for scalability, performance, and developer experience. It leverages modern technologies like **Vite**, **TypeScript**, **Redux Toolkit**, and **Material-UI** to provide a solid foundation for building complex web applications. It also includes built-in support for **Azure AD Authentication** and a comprehensive **Theming System**.

## 🏗️ Project Architecture

The project follows a **Feature-Sliced** inspired architecture, organizing code by its function and domain rather than just technical type.

### High-Level Structure

```
src/
├── components/        # Reusable UI components (Atoms/Molecules)
│   ├── auth/          # Auth-related components (e.g., ProtectedRoute)
│   └── ...
├── containers/        # Smart components that connect UI to State/Logic (Organisms)
├── pages/             # Route-level components (Views)
├── services/          # Data layer and Business Logic
│   ├── apis/          # RTK Query API definitions
│   ├── slices/        # Redux slices (Global state)
│   └── store.ts       # Redux store configuration
├── theme/             # Design System & Theming Engine
├── routes/            # Routing configuration
├── providers/         # React Context Providers (Auth, Theme, etc.)
├── hooks/             # Custom React Hooks
├── utils/             # Helper functions
└── types/             # Shared TypeScript interfaces
```

### Key Architectural Decisions

1.  **Vite as Build Tool**: Chosen for its lightning-fast HMR (Hot Module Replacement) and efficient build process.
2.  **Redux Toolkit & RTK Query**:
    *   **Global State**: Managed via Redux Toolkit slices (e.g., `src/services/slices/global`).
    *   **Server State**: Managed via RTK Query (`src/services/apis`), handling caching, loading states, and data fetching efficiently.
3.  **Material-UI & Styled Components**:
    *   Uses MUI v5 for a robust component library.
    *   Integrates `styled-components` (and Emotion) for custom styling, allowing for a powerful dual-theming system (Light/Dark).
4.  **Azure AD Authentication**:
    *   Implemented using `@azure/msal-browser` and `@azure/msal-react`.
    *   Encapsulated within `src/providers/auth-provider` and enforced via `ProtectedRoute`.

## 🔐 Authentication

Authentication is handled via the Microsoft Authentication Library (MSAL).

*   **Configuration**: `src/providers/auth-provider/authConfig.ts` contains the Azure AD configuration (Client ID, Tenant ID, etc.).
*   **Provider**: `AuthProvider` wraps the application to provide auth context.
*   **Protection**: The `ProtectedRoute` component (`src/components/auth/ProtectedRoute.tsx`) checks for a valid session before rendering protected routes.

## 🎨 Theming System

The application supports a dynamic Light/Dark mode.

*   **Definitions**: Themes are defined in `src/theme/lightTheme.ts` and `src/theme/darkTheme.ts`.
*   **Tokens**: Design tokens (colors, spacing, typography) are centralized in `src/theme/tokens.ts`.
*   **Usage**: The theme is applied via MUI's `ThemeProvider` and Styled Components' `ThemeProvider`, ensuring consistency across all components.

> For a deep dive into the design tokens, component overrides, and migration guides, read the **[Theme Documentation](./src/theme/README.md)**.

## 🛣️ Routing

Routing is implemented using `react-router-dom`.

*   **Definition**: Routes are defined in `src/routes/AppRoutes.tsx`.
*   **Structure**: The app uses a centralized route config approach, making it easy to manage protected and public routes.

## 🛠️ Development Workflow

### 1. Component Generation
Use the built-in CLI tools to generate consistent component structures:

```bash
npm run gen-component  # Creates a dumb UI component
npm run gen-container  # Creates a smart container component
npm run gen-page       # Creates a page component
```

### 2. State Management
*   **Global UI State**: Add a reducer to `src/services/slices`.
*   **API Data**: Define endpoints in `src/services/apis`. RTK Query will auto-generate hooks (e.g., `useGetUsersQuery`).

### 3. Storybook
Develop components in isolation using Storybook:
```bash
npm run storybook
```
Stories are located in `src/stories` or alongside components.

### 4. Linting & Formatting
Maintain code quality with:
```bash
npm run lint
npm run type-check
```

## 🚀 Deployment

The project is configured for easy deployment.
1.  **Build**: `npm run build` generates a production-ready `dist` folder.
2.  **Preview**: `npm run preview` allows you to test the build locally.
3.  **CI/CD**: The project structure is CI/CD friendly. Ensure environment variables are set in your pipeline.

## 🔧 Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Description |
|----------|-------------|
| `VITE_FRONTEND_PORT` | Port for local dev server |
| `VITE_BACKEND_BASE_URL` | API base path (e.g., `/api`) |
| `VITE_AZURE_CLIENT_ID` | Azure AD Client ID |
| `VITE_AZURE_TENANT_ID` | Azure AD Tenant ID |

---
**Note**: For detailed API documentation or specific component usage, refer to the comments within the source code.
