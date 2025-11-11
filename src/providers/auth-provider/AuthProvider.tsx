import type {PropsWithChildren} from 'react';
import AuthMsalProvider from './msal/AuthMsalProvider';

const AuthProvider = ({children}: PropsWithChildren) => {
    return <AuthMsalProvider>{children}</AuthMsalProvider>;
};

export default AuthProvider;
