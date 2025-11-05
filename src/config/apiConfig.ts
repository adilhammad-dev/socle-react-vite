/**
 * API Configuration for Backend Services
 *
 * Provides configuration for calling backend APIs with authentication
 */

import {msalInstance} from 'contexts/AuthContext';

/**
 * Backend API base URL
 * REQUIRED: Set VITE_BACKEND_BASE_URL in .env.local
 */
export const API_BASE_URL = import.meta.env.VITE_BACKEND_BASE_URL || '';

/**
 * API request timeout in milliseconds
 * DEFAULT: 10000ms (10 seconds)
 */
export const API_TIMEOUT = parseInt(import.meta.env.VITE_API_TIMEOUT || '10000', 10);

/**
 * Custom API scope for backend authentication
 * REQUIRED: Set VITE_AZURE_SCOPE in .env.local
 */
export const API_SCOPE = import.meta.env.VITE_AZURE_SCOPE || '';


/**
 * Get access token for backend API calls
 */
export const getApiAccessToken = async (): Promise<string | null> => {
    const account = msalInstance.getActiveAccount();

    if (!account) {
        return null;
    }

    try {
        const response = await msalInstance.acquireTokenSilent({
            scopes: [API_SCOPE],
            account,
        });
        return response.accessToken;
    } catch (error) {
        console.error('Failed to acquire token for API:', error);

        // Try popup if silent fails
        try {
            const response = await msalInstance.acquireTokenPopup({
                scopes: [API_SCOPE],
            });
            return response.accessToken;
        } catch (popupError) {
            console.error('Token popup error:', popupError);
            return null;
        }
    }
};

/**
 * Create authenticated fetch request
 */
export const authenticatedFetch = async (
    endpoint: string,
    options: RequestInit = {}
): Promise<Response> => {
    const token = await getApiAccessToken();

    if (!token) {
        throw new Error('Failed to acquire access token');
    }

    const url = `${API_BASE_URL}${endpoint}`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                ...options.headers,
            },
            signal: controller.signal,
        });

        clearTimeout(timeoutId);
        return response;
    } catch (error) {
        clearTimeout(timeoutId);
        throw error;
    }
};

/**
 * Helper methods for common HTTP operations
 */
export const api = {
    /**
     * GET request
     */
    get: async <T>(endpoint: string): Promise<T> => {
        const response = await authenticatedFetch(endpoint, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return response.json();
    },

    /**
     * POST request
     */
    post: async <T>(endpoint: string, data: any): Promise<T> => {
        const response = await authenticatedFetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return response.json();
    },

    /**
     * PUT request
     */
    put: async <T>(endpoint: string, data: any): Promise<T> => {
        const response = await authenticatedFetch(endpoint, {
            method: 'PUT',
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return response.json();
    },

    /**
     * DELETE request
     */
    delete: async <T>(endpoint: string): Promise<T> => {
        const response = await authenticatedFetch(endpoint, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return response.json();
    },

    /**
     * PATCH request
     */
    patch: async <T>(endpoint: string, data: any): Promise<T> => {
        const response = await authenticatedFetch(endpoint, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        return response.json();
    },
};

/**
 * Usage Example:
 *
 * import { api } from 'config/apiConfig';
 *
 * // GET request
 * const data = await api.get('/estimates');
 *
 * // POST request
 * const result = await api.post('/estimates', { name: 'New Estimate' });
 *
 * // PUT request
 * const updated = await api.put('/estimates/123', { name: 'Updated' });
 *
 * // DELETE request
 * await api.delete('/estimates/123');
 */

