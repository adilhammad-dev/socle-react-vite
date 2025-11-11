import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
    AuthenticatedTemplate,
    MsalProvider,
    UnauthenticatedTemplate,
    useIsAuthenticated,
    useMsal,
} from '@azure/msal-react';
import type {AccountInfo} from '@azure/msal-browser';
import {CacheLookupPolicy, InteractionRequiredAuthError, InteractionStatus,} from '@azure/msal-browser';
import {security} from 'services/internals/security';
import LoginPage from 'pages/LoginPage';
import LoadingPage from 'pages/LoadingPage';
import {isDefined, isUndefined} from 'utils/validation.ts';
import msalInstance from 'utils/auth/authProvider';
import {AuthContext} from '../AuthContext';
import type {AuthContextProps, User} from '../types';
import {loginRequest, tokenRequest} from '../authConfig';

const CustomAuthProvider: React.FC<React.PropsWithChildren> = function ({children}) {
    const [idToken, setIdToken] = useState<string>();
    const [_user, setUser] = useState<User>();
    const [_isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [_isLoading, setIsLoading] = useState<boolean>(false);
    const {accounts, instance, inProgress} = useMsal();

    const activeAccount = useMemo<any | AccountInfo>(
        () => instance.getActiveAccount() != null || accounts?.[0],
        [instance, accounts],
    );

    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        setIsAuthenticated(isAuthenticated);
    }, [isAuthenticated]);

    useEffect(() => {
        if (!isAuthenticated || isUndefined(activeAccount)) return;
        setUser({
            name: activeAccount.idTokenClaims?.name as string,
            email: activeAccount.username ?? '',
        });
    }, [isAuthenticated, activeAccount]);

    const _loginWithRedirect = useCallback(async (): Promise<void> => {
        if (_isLoading || inProgress !== InteractionStatus.None) {
            await Promise.resolve();
            return;
        }

        setIsLoading(true);
        await instance
            .handleRedirectPromise()
            .then((tokenResponse) => {
                if (tokenResponse == null) {
                    const instanceAccounts = instance.getAllAccounts();
                    if (instanceAccounts.length === 0) {
                        // No user signed in
                        void instance.loginRedirect({
                            ...loginRequest,
                            redirectStartPage: window.location.href,
                        });
                    }
                } else {
                    // Do something with the tokenResponse
                }
            })
            .catch((err) => {
                // Handle error
                console.error(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [instance, inProgress, _isLoading]);

    const _logout = useCallback(async (): Promise<void> => {
        await instance.logoutRedirect({
            idTokenHint: idToken,
        });
    }, [instance, idToken]);

    const _getAccessToken = useCallback(async (): Promise<string> => {
        if (inProgress !== InteractionStatus.None) {
            return '';
        }
        let token;
        try {
            const _accounts = instance.getAllAccounts();
            const account =
                isDefined(_accounts) && _accounts.length > 0
                    ? _accounts[0]
                    : instance.getActiveAccount();
            if (account == null) throw new Error('login_required');
            try {
                const result = await instance.acquireTokenSilent({
                    ...tokenRequest,
                    account,
                    cacheLookupPolicy: CacheLookupPolicy.Default,
                });
                token = result?.accessToken;
                setIdToken(result?.idToken);
            } catch (error) {
                if (error instanceof InteractionRequiredAuthError) {
                    void instance.acquireTokenRedirect({
                        ...tokenRequest,
                        loginHint: account?.username,
                        account,
                    });
                }
                throw error;
            }
        } catch (error) {
            console.error(error);
        }
        return token ?? '';
    }, [instance, inProgress]);

    useEffect(() => {
        security.setAccessTokenFunction(async (): Promise<string> => {
            const request = {
                ...tokenRequest,
                account: instance.getAllAccounts()?.[0] ?? '',
                cacheLookupPolicy: CacheLookupPolicy.Default,
            };
            let response;
            try {
                response = await instance.acquireTokenSilent(request);
            } catch (error) {
                console.error(error);
                await instance.acquireTokenRedirect(request);
            }
            return response?.accessToken ?? '';
        });
    }, [instance]);

    const contextValue = useMemo<AuthContextProps>(() => {
        return {
            isLoading: _isLoading || inProgress !== InteractionStatus.None,
            isAuthenticated: _isAuthenticated,
            user: _user,
            getAccessToken: _getAccessToken,
            loginWithRedirect: _loginWithRedirect,
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            logout: _logout,
        };
    }, [
        _isLoading,
        inProgress,
        _isAuthenticated,
        _user,
        _loginWithRedirect,
        _logout,
        _getAccessToken,
    ]);

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

interface AuthMsalProviderProps {
    children?: React.ReactNode;
}

const MsalInitializer = ({children}: AuthMsalProviderProps) => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        msalInstance.initialize()
            .then(() => msalInstance.handleRedirectPromise())
            .then(() => {
                setIsInitialized(true);
            })
            .catch((error) => {
                console.error('Failed to initialize MSAL:', error);
            });
    }, []);

    if (!isInitialized) {
        return <LoadingPage/>;
    }

    return <>{children}</>;
};

const AuthMsalProvider = ({children}: AuthMsalProviderProps) => {
    return (
        <MsalInitializer>
            <MsalProvider instance={msalInstance}>
                <CustomAuthProvider>
                    <UnauthenticatedTemplate>
                        <LoginPage/>
                    </UnauthenticatedTemplate>
                    <AuthenticatedTemplate>{children}</AuthenticatedTemplate>
                </CustomAuthProvider>
            </MsalProvider>
        </MsalInitializer>
    );
};

export default AuthMsalProvider;
