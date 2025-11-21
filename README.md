# React Vite Boilerplate - Enterprise React Boilerplate

A modern, production-ready React boilerplate built with **TypeScript**, **Vite 7**, **Redux Toolkit**, **Material-UI**,
and **Azure AD authentication**.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run Storybook
npm run storybook
```

## ✨ Features

- ⚡ **Vite 7.2.2** - Lightning-fast build tool with HMR
- 🎨 **Material-UI v5** - Comprehensive component library
- 🔐 **Azure AD Auth** - Enterprise authentication with MSAL
- 📦 **Redux Toolkit** - Modern state management with RTK Query
- 🎭 **Dual Theming** - Light/Dark mode with MUI + Styled Components
- 📚 **Storybook 8** - Component documentation and testing
- 🎯 **TypeScript** - Full type safety with strict mode
- 🚀 **Code Generation** - CLI tools for scaffolding components
- 🏗️ **Feature-Sliced** - Scalable architecture pattern

## 📖 Documentation

**[Read the full documentation →](./DOCUMENTATION.md)**

The comprehensive documentation includes:

- What's new in Vite 7
- Complete library versions and tech stack
- Detailed project structure explanation
- Development workflow and best practices
- Authentication & authorization guide
- State management patterns
- Theming & styling guide
- API integration examples
- Code generation tools
- Troubleshooting guide

## 🛠️ Tech Stack

| Category      | Libraries                                           |
|---------------|-----------------------------------------------------|
| **Core**      | React 18.2, TypeScript 5.3, Vite 7.2                |
| **UI**        | Material-UI 5.15, Styled Components 6.1, Emotion 11 |
| **State**     | Redux Toolkit 2.2, React Query 5.22                 |
| **Auth**      | Azure MSAL 3.10, MSAL React 2.0                     |
| **Forms**     | React Hook Form 7.50, Yup 1.3                       |
| **Routing**   | React Router 6.22                                   |
| **Dev Tools** | Storybook 8.0, ESLint 8, Generate React CLI 9.1     |

## 📁 Project Structure

```
src/
├── components/    # Reusable UI components 
├── containers/    # Smart components connecting UI to Logic
├── pages/         # Route-level page components
├── services/      # API definitions (RTK Query) and Redux slices
├── theme/         # Design system, tokens, and theme config
├── routes/        # Application routing configuration
├── providers/     # Context providers (Auth, Theme, etc.)
├── hooks/         # Custom React hooks
├── utils/         # Helper functions and utilities
├── types/         # Shared TypeScript type definitions
├── assets/        # Static assets (images, fonts)
└── stories/       # Storybook stories
```

## 🎯 Available Scripts

```bash
npm run dev              # Start dev server (port 3000)
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking
npm run storybook        # Start Storybook
npm run gen-component    # Generate new component
npm run gen-container    # Generate new container
npm run gen-page         # Generate new page
```

## 🔧 Environment Setup

Create a `.env` file:

```env
VITE_FRONTEND_PORT=3000
VITE_BACKEND_BASE_URL=/api
VITE_BACKEND_TARGET=http://localhost:8012
VITE_AZURE_CLIENT_ID=your-client-id
VITE_AZURE_TENANT_ID=your-tenant-id
```

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it,
see [this documentation](https://react.dev/learn/react-compiler/installation).

## 📚 Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Full Project Documentation](./DOCUMENTATION.md)

## 🤝 Contributing

Please read the [documentation](./DOCUMENTATION.md) for details on the project structure and development workflow.

## 📄 License

This project is provided as a boilerplate template.

---

**Built with ❤️ using React + TypeScript + Vite 7**
