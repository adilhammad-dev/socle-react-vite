import React, { createContext } from 'react';
import type { AuthContextProps } from './types';

const stub = (): never => {
  throw new Error('You forgot to wrap your component in <AuthProvider>.');
};

const initialAuthContext: AuthContextProps = {
  isAuthenticated: false,
  isLoading: true,
  getAccessToken: stub,
  getRawAccessToken: stub,
  loginWithRedirect: stub,
  logout: stub,
  user: stub,
};

const AuthContext = createContext<AuthContextProps>(initialAuthContext);

const useCustomAuth = (): AuthContextProps => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useCustomAuth must be used within a AuthProvider');
  }
  return context;
};

export { useCustomAuth, initialAuthContext, AuthContext };
