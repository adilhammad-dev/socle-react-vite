interface AuthConfig {
    clientId: string;
    authority: string;
    scope: string;
    redirectUri: string;
    postLogoutRedirectUri?: string;
    cacheLocation: 'localStorage' | 'sessionStorage' | 'memoryStorage';
    loginHint?: string;
}

interface GlobalConfigType {
    api: {
        BACKEND_BASE_URL: string;
    };
    auth: {
        msal: AuthConfig;
    };
}

const clientId =
    window.azureConfig?.clientID ?? import.meta.env.VITE_AUTH_MSAL_CLIENT_ID ?? '';
const scope = `${clientId}/${import.meta.env.VITE_AUTH_MSAL_SCOPE}`;
const tenantId =
    window.azureConfig?.tenantID ?? import.meta.env.VITE_AUTH_MSAL_TENANT_ID ?? '';

const GlobalConfig: GlobalConfigType = {
    api: {
        BACKEND_BASE_URL: import.meta.env.VITE_BACKEND_BASE_URL ?? '',
    },
    auth: {
        msal: {
            authority: `https://login.microsoftonline.com/${tenantId}`,
            clientId,
            scope,
            redirectUri: window.location.origin,
            cacheLocation: 'localStorage',
        },
    },
};

export default GlobalConfig;
