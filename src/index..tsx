import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {MsalProvider} from '@azure/msal-react'
import store from 'services/store'
import {msalInstance} from 'utils/auth/authProvider'
import {security} from 'services/internals/security'
import {tokenRequest} from 'config/authConfig'
import App from './App'
import './index.css'

const getAccessToken = async (): Promise<string | null> => {
    const account = msalInstance.getActiveAccount();

    if (!account) {
        const allAccounts = msalInstance.getAllAccounts();
        if (allAccounts.length > 0) {
            msalInstance.setActiveAccount(allAccounts[0]);
            return getAccessToken();
        }
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
                if (!window.location.pathname.includes('/login')) {
                    window.location.href = '/login';
                }
                return null;
            }
        }
        return null;
    }
};

msalInstance.initialize().then(() => {
    return msalInstance.handleRedirectPromise();
}).then(() => {
    security.setAccessTokenFunction(getAccessToken);
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <Provider store={store}>
                <MsalProvider instance={msalInstance}>
                    <App/>
                </MsalProvider>
            </Provider>
        </StrictMode>,
    );
}).catch((error) => {
    console.error('Failed to initialize MSAL:', error);
});
