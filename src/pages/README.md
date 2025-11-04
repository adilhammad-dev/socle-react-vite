# Pages Folder Structure

## 📁 New Structure

Each page now has its own folder containing:
- `index.tsx` - Main page component
- `[PageName].styled.ts` - Styled components for that page

```
pages/
├── HomePage/
│   ├── index.tsx
│   └── HomePage.styled.ts
├── BasicPage/
│   ├── index.tsx
│   └── BasicPage.styled.ts
├── FormPage/
│   ├── index.tsx
│   └── FormPage.styled.ts
├── ExamplePage/
│   ├── index.tsx
│   └── ExamplePage.styled.ts
├── LoadingPage/
│   ├── index.tsx
│   └── LoadingPage.styled.ts
└── NotFoundPage/
    ├── index.tsx
    └── NotFoundPage.styled.ts
```

## ⚠️ Old Files to Delete

The following files in the root of `pages/` are **deprecated** and should be deleted:

- ❌ `HomePage.tsx`
- ❌ `BasicPage.tsx`
- ❌ `FormPage.tsx`
- ❌ `ExamplePage.tsx`
- ❌ `ExamplePage.styled.ts`
- ❌ `LoadingPage.tsx`
- ❌ `LoadingPage.styled.ts`
- ❌ `NotFoundPage.tsx`
- ❌ `NotFoundPage.styled.ts`

**Delete command (from pages folder):**
```cmd
del HomePage.tsx BasicPage.tsx FormPage.tsx ExamplePage.tsx ExamplePage.styled.ts LoadingPage.tsx LoadingPage.styled.ts NotFoundPage.tsx NotFoundPage.styled.ts
```

## ✅ Benefits

1. **Better Organization**: Each page has its own folder
2. **Scalability**: Easy to add more files per page (tests, utils, etc.)
3. **Consistency**: Follows established patterns in containers
4. **Cleaner Imports**: Import from folder name instead of specific file

## 📝 Import Usage

Imports remain the same thanks to `index.tsx`:

```typescript
import HomePage from 'pages/HomePage';
import BasicPage from 'pages/BasicPage';
import ExamplePage from 'pages/ExamplePage';
import LoadingPage from 'pages/LoadingPage';
import NotFoundPage from 'pages/NotFoundPage';
```

## 🎨 Architecture Pattern

```
Page Folder/
├── index.tsx              # Main component export
├── [PageName].styled.ts   # Styled components
└── (future additions)     # Tests, hooks, utils, etc.
```

This pattern matches the structure used in `containers/` folder.

