import React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from 'components/ui/theme';
import { Navbar, ThemeToggle } from 'components/ui';
import { NavigationMenu, LoadingFallback, Footer, menuItems } from 'components/router';
import { appRoutes } from 'routes/AppRoutes';
import { useThemeMode, useMenuState } from 'hooks/useRouterState';
import { AppContainer, MainContent } from './AppRouter.styled';

/**
 * Main App Router Component
 *
 * Responsibilities:
 * - Theme management
 * - Route configuration
 * - Layout structure (navbar, menu, content, footer)
 *
 * Architecture:
 * - Uses custom hooks for state management
 * - Delegates routing to AppRoutes component
 * - Delegates navigation to NavigationMenu component
 * - Uses styled-components for styling
 */
function AppRouter() {
  const { themeMode, setThemeMode } = useThemeMode();
  const { menuOpen, toggleMenu } = useMenuState();

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

  return (
    <MuiThemeProvider theme={currentTheme}>
      <StyledThemeProvider theme={currentTheme}>
        <CssBaseline />
        <BrowserRouter>
          <AppContainer>
            {/* Navigation Bar */}
            <Navbar
              title="UI Component Library"
              onMenuClick={toggleMenu}
              actions={<ThemeToggle mode={themeMode} onChange={setThemeMode} />}
            />

            {/* Navigation Menu */}
            <NavigationMenu items={menuItems} />

            {/* Main Content */}
            <MainContent>
              <React.Suspense fallback={<LoadingFallback />}>
                <Routes>
                  {appRoutes}
                </Routes>
              </React.Suspense>
            </MainContent>

            {/* Footer */}
            <Footer />
          </AppContainer>
        </BrowserRouter>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default AppRouter;
