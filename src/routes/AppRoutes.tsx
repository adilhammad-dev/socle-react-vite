import {Route} from 'react-router-dom';
import HomePage from 'pages/HomePage';
import BasicPage from 'pages/BasicPage';
import FormPage from 'pages/FormPage';
import ExamplePage from 'pages/ExamplePage';
import TypographyPage from 'pages/TypographyPage';
import NotFoundPage from 'pages/NotFoundPage';
import ProtectedRoute from 'components/auth/ProtectedRoute';

export const appRoutes = (
    <>
        {/* Protected Routes - Require Authentication */}
        <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
        <Route path="/basic" element={<ProtectedRoute><BasicPage/></ProtectedRoute>}/>
        <Route path="/form" element={<ProtectedRoute><FormPage/></ProtectedRoute>}/>
        <Route path="/examples" element={<ProtectedRoute><ExamplePage/></ProtectedRoute>}/>
        <Route path="/typography" element={<ProtectedRoute><TypographyPage/></ProtectedRoute>}/>

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage/>}/>
    </>
);

