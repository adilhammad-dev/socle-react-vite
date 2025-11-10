import React, { type ReactNode } from 'react';
// eslint-disable-next-line import/no-cycle
import AuthMsalProvider from './msal/AuthMsalProvider';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = function ({ children }) {
  // could return other providers for other auth
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <AuthMsalProvider>{children}</AuthMsalProvider>;
};

export default AuthProvider;
