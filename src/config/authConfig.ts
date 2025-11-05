/**
 * Microsoft Azure AD Authentication Configuration
 *
 * This file contains MSAL (Microsoft Authentication Library) configuration
 * for Azure AD authentication.
 *
 * Setup Instructions:
 * 1. Register your application in Azure Portal (portal.azure.com)
 * 2. Navigate to: Azure Active Directory > App registrations > New registration
 * 3. Set redirect URI: http://localhost:3000 (for development)
 * 4. Copy the Application (client) ID
 * 5. Copy the Directory (tenant) ID
 * 6. Update the values below or use environment variables
 */

import type {Configuration, PopupRequest, RedirectRequest} from '@azure/msal-browser';

/**
 * Configuration object to initialize MSAL instance
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */

export const msalConfig: Configuration = {
    auth: {
        // Application (client) ID from Azure Portal
        // REQUIRED: Set VITE_AZURE_CLIENT_ID in .env.local
        clientId: import.meta.env.VITE_AZURE_CLIENT_ID || '',

        // Directory (tenant) ID from Azure Portal
        // REQUIRED: Set VITE_AZURE_AUTHORITY in .env.local
        authority: import.meta.env.VITE_AZURE_AUTHORITY || '',

        // Redirect URI - must match the one configured in Azure Portal
        redirectUri: import.meta.env.VITE_AZURE_REDIRECT_URI || window.location.origin,

        // Post logout redirect URI
        postLogoutRedirectUri: import.meta.env.VITE_AZURE_POST_LOGOUT_REDIRECT_URI || window.location.origin,

        // Set to true if your application is a single-page application
        navigateToLoginRequestUrl: true,
    },
    cache: {
        // Location of token cache
        // 'sessionStorage' - session-based storage (cleared on browser close)
        // 'localStorage' - persistent storage (remains after browser close)
        cacheLocation: 'localStorage',

        // Set to true to avoid issues in IE11 or Edge
        storeAuthStateInCookie: false,
    },
};

/**
 * Scopes for login request
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent
 */
export const loginRequest: PopupRequest | RedirectRequest = {
    scopes: [
        // Custom API scope for your application
        // REQUIRED: Set VITE_AZURE_SCOPE in .env.local
        ...(import.meta.env.VITE_AZURE_SCOPE ? [import.meta.env.VITE_AZURE_SCOPE] : []),
        // Standard Microsoft Graph scopes
        'User.Read', // Read user profile
        'openid',    // OpenID Connect
        'profile',   // User profile information
        'email',     // User email
    ],
};

/**
 * Scopes for accessing Microsoft Graph API
 */
export const graphConfig = {
    graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
    graphPhotoEndpoint: 'https://graph.microsoft.com/v1.0/me/photo/$value',
};

/**
 * Scopes for Microsoft Graph API calls
 */
export const tokenRequest = {
    scopes: ['User.Read', 'Mail.Read'],
};

/**
 * Protected routes configuration
 * All routes require authentication except login
 */
export const protectedRoutes = [
    '/',
    '/basic',
    '/form',
    '/examples',
    '/typography',
    '/dashboard',
    '/profile',
    '/settings',
    // Add more protected routes here
];

/**
 * Public routes that don't require authentication
 * Only login page is public
 */
export const publicRoutes = [
    '/login',
];

/**
 * Helper function to check if a route requires authentication
 */
export const isProtectedRoute = (path: string): boolean => {
    return protectedRoutes.some(route => path.startsWith(route));
};

/**
 * Helper function to check if a route is public
 */
export const isPublicRoute = (path: string): boolean => {
    return publicRoutes.some(route => path === route);
};

