/**
 * MSAL Authentication Context
 */

import type {ReactNode} from 'react';
import {createContext, useContext, useEffect, useState} from 'react';
import type {AccountInfo, AuthenticationResult} from '@azure/msal-browser';
import {EventType, PublicClientApplication} from '@azure/msal-browser';
import {loginRequest, msalConfig, tokenRequest} from 'config/authConfig';
import {security} from 'services/internals/security';

export const msalInstance = new PublicClientApplication(msalConfig);

msalInstance.initialize().then(() => {
    msalInstance.handleRedirectPromise().then((response) => {
        if (response) {
            msalInstance.setActiveAccount(response.account);
        }
    }).catch((error) => {
        console.error('Error handling redirect:', error);
    });
});

interface AuthContextType {
    isAuthenticated: boolean;
    user: AccountInfo | null;
    loading: boolean;
    login: () => Promise<void>;
    logout: () => Promise<void>;
    getAccessToken: () => Promise<string | null>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider = ({children}: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<AccountInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const getAccessToken = async (): Promise<string | null> => {
        const account = msalInstance.getActiveAccount();

        if (!account) {
            return null;
        }

        try {
            const response = await msalInstance.acquireTokenSilent({
                ...tokenRequest,
                account,
            });
            return response.accessToken;
        } catch (error: any) {
            const errorCode = error.errorCode || error.error;

            if (errorCode === 'login_required' ||
                errorCode === 'interaction_required' ||
                errorCode === 'consent_required') {

                try {
                    const response = await msalInstance.acquireTokenPopup(tokenRequest);
                    return response.accessToken;
                } catch (popupError) {
                    setIsAuthenticated(false);
                    setUser(null);

                    if (!window.location.pathname.includes('/login')) {
                        window.location.href = '/login';
                    }

                    return null;
                }
            }

            return null;
        }
    };

    useEffect(() => {
        security.setAccessTokenFunction(getAccessToken);

        const accounts = msalInstance.getAllAccounts();

        if (accounts.length > 0) {
            msalInstance.setActiveAccount(accounts[0]);
            setUser(accounts[0]);
            setIsAuthenticated(true);
        }

        setLoading(false);

        const callbackId = msalInstance.addEventCallback((event) => {
            if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
                const payload = event.payload as AuthenticationResult;
                msalInstance.setActiveAccount(payload.account);
                setUser(payload.account);
                setIsAuthenticated(true);
            }

            if (event.eventType === EventType.LOGOUT_SUCCESS) {
                setUser(null);
                setIsAuthenticated(false);
            }

            if (event.eventType === EventType.LOGIN_FAILURE) {
                console.error('Login failed:', event.error);
            }

            if (event.eventType === EventType.ACQUIRE_TOKEN_FAILURE) {
                console.error('Token acquisition failed:', event.error);
            }
        });

        return () => {
            if (callbackId) {
                msalInstance.removeEventCallback(callbackId);
            }
        };
    }, []);

    const login = async () => {
        try {
            setLoading(true);
            const loginResponse = await msalInstance.loginPopup(loginRequest);
            msalInstance.setActiveAccount(loginResponse.account);
            setUser(loginResponse.account);
            setIsAuthenticated(true);
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const logout = async () => {
        try {
            setLoading(true);
            await msalInstance.logoutPopup({
                mainWindowRedirectUri: '/',
            });
            setUser(null);
            setIsAuthenticated(false);
        } catch (error) {
            console.error('Logout error:', error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const value: AuthContextType = {
        isAuthenticated,
        user,
        loading,
        login,
        logout,
        getAccessToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};



