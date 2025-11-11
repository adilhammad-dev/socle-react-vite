import type {AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import axios from 'axios';
import {InteractionRequiredAuthError, PublicClientApplication} from '@azure/msal-browser';
import msalInstance from './authProvider';
import {tokenRequest} from "providers/auth-provider/authConfig.ts";

const request: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
    timeout: Number(import.meta.env.VITE_TIMEOUT) || 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getToken = async (instance: PublicClientApplication): Promise<string | null> => {
    try {
        const accounts = instance.getAllAccounts();

        if (accounts.length === 0) {
            return null;
        }

        const silentRequest = {
            ...tokenRequest,
            account: accounts[0],
        };

        const response = await instance.acquireTokenSilent(silentRequest);
        return response.accessToken;
    } catch (error) {
        if (error instanceof InteractionRequiredAuthError) {
            try {
                const response = await instance.acquireTokenPopup(tokenRequest);
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

const authorized = (token: string): AxiosInstance => {
    request.defaults.headers.common.Authorization = `Bearer ${token}`;
    return request;
};

request.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        try {
            const token = await getToken(msalInstance);

            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        } catch (error) {
            console.error('Error in request interceptor:', error);
        }

        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

request.interceptors.response.use(
    (response) => response,
    (err: AxiosError) => {
        if (err.response?.status === 401) {
            if (!window.location.pathname.includes('/login')) {
                window.location.href = '/login';
            }
        }

        if (err.response?.data) {
            const errorData = err.response.data as any;

            if (errorData.detail || errorData.title) {
                const data = [{
                    message: errorData.detail || errorData.message || 'An error occurred',
                    logref: errorData.title || errorData.type || 'Error'
                }];

                const newError = {
                    ...err,
                    response: {
                        ...err.response,
                        data
                    } as AxiosResponse
                };
                return Promise.reject(newError);
            }
        }

        return Promise.reject(err);
    }
);

const getAuthorization = (): string | undefined => {
    return request.defaults.headers.common.Authorization as string | undefined;
};

export default request;
export {authorized, getAuthorization};
