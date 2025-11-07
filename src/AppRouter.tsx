import {Suspense} from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import {CssBaseline, ThemeProvider as MuiThemeProvider} from '@mui/material';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from 'theme';
import {AppContainer, GlobalStyle, MainContent} from './GlobalStyle';
import {Footer} from 'components/router';
import LoadingPage from 'pages/LoadingPage';
import LoginPage from 'pages/LoginPage';
import {appRoutes} from 'routes/AppRoutes';
import {useThemeMode} from 'hooks/useRouterState';
import {useAuth} from 'contexts/AuthContext';

function AppRouter() {
    const {themeMode} = useThemeMode();
    const {isAuthenticated, loading} = useAuth();
    const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;

    return (
        <MuiThemeProvider theme={currentTheme}>
            <StyledThemeProvider theme={currentTheme}>
                <CssBaseline/>
                <GlobalStyle/>
                <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
                    {loading ? (
                        <LoadingPage/>
                    ) : !isAuthenticated ? (
                        <Suspense fallback={<LoadingPage/>}>
                            <LoginPage/>
                        </Suspense>
                    ) : (
                        <AppContainer>
                            <MainContent>
                                <Suspense fallback={<LoadingPage/>}>
                                    <Routes>{appRoutes}</Routes>
                                </Suspense>
                            </MainContent>

                            <Footer/>
                        </AppContainer>
                    )}
                </BrowserRouter>
            </StyledThemeProvider>
        </MuiThemeProvider>
    );
}

export default AppRouter;
