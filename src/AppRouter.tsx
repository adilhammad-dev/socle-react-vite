import {Suspense} from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import {CssBaseline, ThemeProvider as MuiThemeProvider} from '@mui/material';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsal} from '@azure/msal-react';
import {InteractionStatus} from '@azure/msal-browser';
import {darkTheme, lightTheme} from 'theme';
import {AppContainer, GlobalStyle, MainContent} from './GlobalStyle';
import LoadingPage from 'pages/LoadingPage';
import LoginPage from 'pages/LoginPage';
import {appRoutes} from 'routes/AppRoutes';
import {useThemeMode} from 'hooks/useRouterState';

function AppRouter() {
    const {themeMode} = useThemeMode();
    const {inProgress} = useMsal();
    const currentTheme = themeMode === 'light' ? lightTheme : darkTheme;


    return (
        <MuiThemeProvider theme={currentTheme}>
            <StyledThemeProvider theme={currentTheme}>
                <CssBaseline/>
                <GlobalStyle/>
                <BrowserRouter future={{v7_relativeSplatPath: true, v7_startTransition: true}}>
                    {inProgress === InteractionStatus.Startup || inProgress === InteractionStatus.HandleRedirect ? (
                        <LoadingPage/>
                    ) : (
                        <>
                            <UnauthenticatedTemplate>
                                <Suspense fallback={<LoadingPage/>}>
                                    <LoginPage/>
                                </Suspense>
                            </UnauthenticatedTemplate>

                            <AuthenticatedTemplate>
                                <AppContainer>
                                    <MainContent>
                                        <Suspense fallback={<LoadingPage/>}>
                                            <Routes>{appRoutes}</Routes>
                                        </Suspense>
                                    </MainContent>
                                </AppContainer>
                            </AuthenticatedTemplate>
                        </>
                    )}
                </BrowserRouter>
            </StyledThemeProvider>
        </MuiThemeProvider>
    );
}

export default AppRouter;
