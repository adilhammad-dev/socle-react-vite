import {Route} from 'react-router-dom';
import UsersPage from 'pages/UsersPage';
import NotFoundPage from 'pages/NotFoundPage';
import ProtectedRoute from 'components/auth/ProtectedRoute';

export const appRoutes = (
    <>
        {/* Protected Routes - Require Authentication */}
        <Route path="/" element={<ProtectedRoute><UsersPage/></ProtectedRoute>}/>
        <Route path="/users" element={<ProtectedRoute><UsersPage/></ProtectedRoute>}/>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage/>}/>
    </>
);

