# Quick Start Guide

## Project: fs-ai-app

### Prerequisites
- Node.js >= 18.0.0
- npm >= 8.0.0

### Installation
```bash
npm install
```

### Development Commands

#### Start Development Server
```bash
npm run dev
# or use the batch file
start-dev.bat
```
The app will be available at `http://localhost:5173`

#### Start Storybook
```bash
npm run storybook
# or use the batch file
start-storybook.bat
```
Storybook will be available at `http://localhost:6006`

#### Type Check
```bash
npm run type-check
```
Verifies all TypeScript types are correct

#### Lint Code
```bash
npm run lint
```
Runs ESLint with auto-fix

#### Build for Production
```bash
npm run build
```
Creates optimized production build in `dist/` folder

#### Preview Production Build
```bash
npm run preview
```
Serves the production build locally

#### Build Storybook
```bash
npm run build-storybook
```
Creates static Storybook build in `storybook-static/` folder

#### Test Storybook
```bash
npm run test-storybook
```
Runs Storybook tests

#### Clean Build Artifacts
```bash
npm run clean
```
Removes `dist/` and `storybook-static/` folders

### Project Features

#### Pages
- **Dashboard Page** - Shows report cards with mini charts
- **Reports Page** - Displays detailed report list
- **Sales Page** - Shows sales summary

#### State Management
- **Redux Toolkit** for global state
- **React Query** for server state and caching

#### Components
- **UI Components** - Button, Input, DateInput, Text
- **Card Component** - Reusable card container
- **MiniChart** - Simple chart visualization

#### Styling
- **Styled Components** for component styling
- **Theme System** with light/dark themes
- **Material UI** integration

#### API Integration
- Mock API endpoints in `public/mocks/`
- Axios HTTP client with auth interceptor
- React Query for data fetching

### File Structure
```
src/
├── components/     # Reusable UI components
├── containers/     # Feature containers
├── pages/          # Route pages
├── services/       # API, store, slices
├── styles/         # Global styles and themes
├── types/          # TypeScript types
└── utils/          # Helpers and hooks
```

### Environment Variables
Create a `.env` file for custom configuration:
```
VITE_API_URL=http://your-api-url.com
```

### Troubleshooting

#### Port Already in Use
If port 5173 is in use, Vite will automatically try the next available port.

#### TypeScript Errors
Run `npm run type-check` to see detailed type errors.

#### Module Not Found
Ensure all imports use the configured path aliases:
- `services/` → `src/services/`
- `components/` → `src/components/`
- `containers/` → `src/containers/`
- `pages/` → `src/pages/`
- `types/` → `src/types/`
- `utils/` → `src/utils/`

### Browser Support
- Modern browsers with ES2020 support
- Chrome, Firefox, Safari, Edge (latest versions)

### Additional Resources
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [React Query Documentation](https://tanstack.com/query)
- [Storybook Documentation](https://storybook.js.org)

