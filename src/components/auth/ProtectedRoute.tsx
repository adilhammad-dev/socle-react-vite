import {Navigate, useLocation} from 'react-router-dom';
import {useIsAuthenticated, useMsal} from '@azure/msal-react';
import {InteractionStatus} from '@azure/msal-browser';
import LoadingPage from 'pages/LoadingPage';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

/**
 * Protected Route Component
 *
 * Wraps routes that require authentication.
 * Redirects to login page if user is not authenticated.
 */
export function ProtectedRoute({children}: ProtectedRouteProps) {
    const isAuthenticated = useIsAuthenticated();
    const {inProgress} = useMsal();
    const location = useLocation();

    // Show loading state while authentication is in progress
    if (inProgress === InteractionStatus.Startup || inProgress === InteractionStatus.HandleRedirect) {
        return <LoadingPage/>;
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated) {
        // Save the location they were trying to access
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    // Render the protected content
    return <>{children}</>;
}

export default ProtectedRoute;

