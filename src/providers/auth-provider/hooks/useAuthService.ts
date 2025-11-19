import {useCallback} from 'react';
import {useMsal} from '@azure/msal-react';
import {loginRequest, logoutRequest} from '../authConfig';

export interface AuthError {
    code: string;
    message: string;
    userMessage: string;
}

export const useAuthService = () => {
    const {instance} = useMsal();

    const handleAuthError = useCallback((error: any): AuthError => {
        const authError: AuthError = {
            code: error.errorCode || 'unknown_error',
            message: error.message || 'An unexpected error occurred',
            userMessage: 'Authentication failed. Please try again.',
        };

        // Map specific error codes to user-friendly messages
        switch (error.errorCode) {
            case 'user_cancelled':
                authError.userMessage = 'Sign-in was cancelled.';
                break;
            case 'popup_window_error':
                authError.userMessage = 'Unable to open sign-in popup. Please check your browser settings.';
                break;
            case 'network_error':
                authError.userMessage = 'Network error. Please check your connection and try again.';
                break;
            case 'interaction_required':
                authError.userMessage = 'Additional authentication is required.';
                break;
            default:
                authError.userMessage = 'Sign-in failed. Please contact support if the problem persists.';
        }

        return authError;
    }, []);

    const loginWithPopup = useCallback(async (): Promise<{ success: boolean; error?: AuthError }> => {
        try {
            await instance.loginPopup(loginRequest);
            return {success: true};
        } catch (error: any) {
            const authError = handleAuthError(error);
            console.error('Login failed:', authError);
            return {success: false, error: authError};
        }
    }, [instance, handleAuthError]);

    const loginWithRedirect = useCallback(async (): Promise<void> => {
        try {
            await instance.loginRedirect(loginRequest);
        } catch (error: any) {
            const authError = handleAuthError(error);
            console.error('Login redirect failed:', authError);
        }
    }, [instance, handleAuthError]);

    const logoutWithPopup = useCallback(async (): Promise<{ success: boolean; error?: AuthError }> => {
        try {
            await instance.logoutPopup({
                ...logoutRequest,
                mainWindowRedirectUri: '/',
            });
            return {success: true};
        } catch (error: any) {
            const authError = handleAuthError(error);
            console.error('Logout failed:', authError);
            return {success: false, error: authError};
        }
    }, [instance, handleAuthError]);

    const logoutWithRedirect = useCallback(async (): Promise<void> => {
        try {
            await instance.logoutRedirect(logoutRequest);
        } catch (error: any) {
            const authError = handleAuthError(error);
            console.error('Logout redirect failed:', authError);
        }
    }, [instance, handleAuthError]);

    return {
        loginWithPopup,
        loginWithRedirect,
        logoutWithPopup,
        logoutWithRedirect,
        handleAuthError,
    };
};