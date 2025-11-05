/**
 * MSAL Authentication Context
 *
 * Provides authentication context and hooks for the application
 */

import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import {
  PublicClientApplication,
  EventType,
} from '@azure/msal-browser';
import type {
  AccountInfo,
  AuthenticationResult,
} from '@azure/msal-browser';
import { msalConfig, loginRequest } from 'config/authConfig';

// Create MSAL instance
export const msalInstance = new PublicClientApplication(msalConfig);

// Wait for MSAL to initialize
msalInstance.initialize().then(() => {
  // Handle redirect promise
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

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AccountInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const accounts = msalInstance.getAllAccounts();

    if (accounts.length > 0) {
      msalInstance.setActiveAccount(accounts[0]);
      setUser(accounts[0]);
      setIsAuthenticated(true);
    }

    setLoading(false);

    // Set up event callbacks
    const callbackId = msalInstance.addEventCallback((event) => {
      if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const payload = event.payload as AuthenticationResult;
        const account = payload.account;
        msalInstance.setActiveAccount(account);
        setUser(account);
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

  const getAccessToken = async (): Promise<string | null> => {
    const account = msalInstance.getActiveAccount();

    if (!account) {
      return null;
    }

    try {
      const response = await msalInstance.acquireTokenSilent({
        scopes: loginRequest.scopes,
        account,
      });
      return response.accessToken;
    } catch (error) {
      console.error('Token acquisition error:', error);

      // If silent token acquisition fails, try popup
      try {
        const response = await msalInstance.acquireTokenPopup(loginRequest);
        return response.accessToken;
      } catch (popupError) {
        console.error('Token popup error:', popupError);
        return null;
      }
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

/**
 * Custom hook to access authentication context
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

