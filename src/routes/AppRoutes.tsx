import { Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import BasicPage from 'pages/BasicPage';
import FormPage from 'pages/FormPage';
import ExamplePage from 'pages/ExamplePage';
import NotFoundPage from 'pages/NotFoundPage';

export const appRoutes = (
  <>
    <Route path="/" element={<HomePage />} />
    <Route path="/basic" element={<BasicPage />} />
    <Route path="/form" element={<FormPage />} />
    <Route path="/examples" element={<ExamplePage />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
);

