import {createContext} from 'react';
import type {AuthContextProps} from './types';

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


export {initialAuthContext, AuthContext};
