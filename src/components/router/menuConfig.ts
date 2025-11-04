import type { MenuItem } from './types';

/**
 * Navigation menu configuration
 * Defines all available and pending routes in the application
 */
export const menuItems: MenuItem[] = [
  // ✅ Available Pages (Refactored following architecture pattern)
  { path: '/', label: 'Home', available: true },
  { path: '/basic', label: 'Basic', available: true },
  { path: '/form', label: 'Forms', available: true },
  { path: '/examples', label: 'Examples', available: true },

  // ⏳ Pending Refactoring (Need Container → View separation)
  { path: '/navigation', label: 'Navigation', available: false },
  { path: '/feedback', label: 'Feedback', available: false },
  { path: '/data-display', label: 'Data Display', available: false },
  { path: '/layout', label: 'Layout', available: false },
  { path: '/visualization', label: 'Charts', available: false },
  { path: '/advanced', label: 'Advanced', available: false },
];

