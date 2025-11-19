import {Suspense} from 'react';
import {BrowserRouter, Routes} from 'react-router-dom';
import {AuthenticatedTemplate, UnauthenticatedTemplate, useMsal} from '@azure/msal-react';
import {InteractionStatus} from '@azure/msal-browser';
import {AppContainer, MainContent} from './GlobalStyle';
import LoadingPage from 'pages/LoadingPage';
import LoginPage from 'pages/LoginPage';
import {appRoutes} from 'routes/AppRoutes';
import Header from 'components/layout/Header';
import {useColorMode} from 'theme/useColorMode';

function AppRouter() {
    const {inProgress} = useMsal();
    const {colorMode} = useColorMode();

    return (
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
                            <Header />
                            <MainContent $colorMode={colorMode}>
                                <Suspense fallback={<LoadingPage/>}>
                                    <Routes>{appRoutes}</Routes>
                                </Suspense>
                            </MainContent>
                        </AppContainer>
                    </AuthenticatedTemplate>
                </>
            )}
        </BrowserRouter>
    );
}

export default AppRouter;
