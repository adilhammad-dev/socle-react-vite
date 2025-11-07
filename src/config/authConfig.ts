/**
 * Azure AD Authentication Configuration
 */

import type {Configuration, PopupRequest, RedirectRequest} from '@azure/msal-browser';

const tenantId = import.meta.env.VITE_AUTH_MSAL_TENANT_ID || '';
const clientId = import.meta.env.VITE_AUTH_MSAL_CLIENT_ID || '';
const scope = import.meta.env.VITE_AUTH_MSAL_SCOPE || '';

export const msalConfig: Configuration = {
    auth: {
        clientId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        redirectUri: window.location.origin,
        postLogoutRedirectUri: window.location.origin,
        navigateToLoginRequestUrl: true,
    },
    cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: false,
    },
};

export const loginRequest: PopupRequest | RedirectRequest = {
    scopes: [
        ...(scope ? [`${clientId}/${scope}`] : []),
        'User.Read',
        'openid',
        'profile',
        'email',
    ],
};

export const tokenRequest = {
    scopes: [
        ...(scope ? [`${clientId}/${scope}`] : []),
        'User.Read',
    ],
};

export const logoutRequest = {
    postLogoutRedirectUri: window.location.origin,
};





