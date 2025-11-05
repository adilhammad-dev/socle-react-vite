import React from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import {CssBaseline, ThemeProvider as MuiThemeProvider} from '@mui/material';
import styled, {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from 'theme';
import {AppContainer, GlobalStyle, MainContent} from './GlobalStyle';
import {Navbar, ThemeToggle} from 'components/ui';
import {Footer, menuItems, NavigationMenu} from 'components/router';
import LoadingPage from 'pages/LoadingPage';
import {appRoutes} from 'routes/AppRoutes';
import {useMenuState, useThemeMode} from 'hooks/useRouterState';
import UserProfile from 'components/auth/UserProfile';
import {useAuth} from 'contexts/AuthContext';
import LoginPage from "pages/LoginPage";

const NavbarActions = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

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
    const {themeMode, setThemeMode} = useThemeMode();
    const {toggleMenu} = useMenuState();
    const {isAuthenticated, loading} = useAuth();

    const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

    return (
        <MuiThemeProvider theme={currentTheme}>
            <StyledThemeProvider theme={currentTheme}>
                <CssBaseline/>
                <GlobalStyle/>
                <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
                    {loading ? (
                        // Show loading while checking authentication
                        <LoadingPage/>
                    ) : !isAuthenticated ? (
                        // Not authenticated: Show ONLY login page (no navbar, menu, footer)
                        <React.Suspense fallback={<LoadingPage/>}>
                            <LoginPage/>
                        </React.Suspense>
                    ) : (
                        // Authenticated: Show full app layout
                        <AppContainer>
                            {/* Navigation Bar */}
                            <Navbar
                                title="UI Component Library"
                                onMenuClick={toggleMenu}
                                actions={
                                    <NavbarActions>
                                        <ThemeToggle mode={themeMode} onChange={setThemeMode}/>
                                        <UserProfile/>
                                    </NavbarActions>
                                }
                            />

                            {/* Navigation Menu */}
                            <NavigationMenu items={menuItems}/>

                            {/* Main Content */}
                            <MainContent>
                                <React.Suspense fallback={<LoadingPage/>}>
                                    <Routes>
                                        {appRoutes}
                                    </Routes>
                                </React.Suspense>
                            </MainContent>

                            {/* Footer */}
                            <Footer/>
                        </AppContainer>
                    )}
                </BrowserRouter>
            </StyledThemeProvider>
        </MuiThemeProvider>
    );
}

export default AppRouter;
