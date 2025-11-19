import {Route} from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import ProtectedRoute from 'components/auth/ProtectedRoute';
import LoginPage from "pages/LoginPage";
import {SimpleUserForm} from 'pages/SimpleUserForm';

export const appRoutes = (
    <>
        {/* Protected Routes - Require Authentication */}
        <Route path="/" element={<ProtectedRoute><SimpleUserForm/></ProtectedRoute>}/>
        <Route path="/login" element={<LoginPage/>}/>
        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage/>}/>
    </>
);
