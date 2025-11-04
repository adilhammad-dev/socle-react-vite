import { Route } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import BasicPage from 'pages/BasicPage';
import FormPage from 'pages/FormPage';
import DashboardApp from 'examples/DashboardApp';
import ComponentShowcase from 'examples/ComponentShowcase';
import { NotFoundPage } from 'components/router';

/**
 * Application Routes Configuration
 * Defines all active routes in the application
 *
 * Note: Pending routes are commented out until pages are refactored
 * See ARCHITECTURE.md for refactoring guidelines
 */
export const appRoutes = (
  <>
    {/* ✅ Refactored Pages (Following Architecture Pattern) */}
    <Route path="/" element={<HomePage />} />
    <Route path="/basic" element={<BasicPage />} />
    <Route path="/form" element={<FormPage />} />

    {/* ✅ Examples & Dashboard */}
    <Route path="/dashboard" element={<DashboardApp />} />
    <Route path="/showcase" element={<ComponentShowcase />} />

    {/* ⏳ TODO: Uncomment after refactoring these pages
     * Follow the pattern: Page → Container → View
     * See HomePage, BasicPage, FormPage for examples
     */}
    {/* <Route path="/navigation" element={<NavigationPage />} /> */}
    {/* <Route path="/feedback" element={<FeedbackPage />} /> */}
    {/* <Route path="/data-display" element={<DataDisplayPage />} /> */}
    {/* <Route path="/layout" element={<LayoutPage />} /> */}
    {/* <Route path="/visualization" element={<VisualizationPage />} /> */}
    {/* <Route path="/advanced" element={<AdvancedPage />} /> */}

    {/* 404 Not Found */}
    <Route path="*" element={<NotFoundPage />} />
  </>
);

