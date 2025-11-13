import {Route} from 'react-router-dom';
import AllComponentsDemo from 'pages/AllComponentsDemo';
import NotFoundPage from 'pages/NotFoundPage';
import ProtectedRoute from 'components/auth/ProtectedRoute';
import LoginPage from "pages/LoginPage";

export const appRoutes = (
    <>
        {/* Protected Routes - Require Authentication */}
        <Route path="/" element={<ProtectedRoute><AllComponentsDemo/></ProtectedRoute>}/>

        <Route path="/login" element={<ProtectedRoute><LoginPage/></ProtectedRoute>}/>
        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage/>}/>
    </>
);

