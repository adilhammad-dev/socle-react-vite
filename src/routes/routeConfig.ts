export const protectedRoutes = [
    '/',
    '/simple-user-form',
];

export const publicRoutes = [
    '/login',
];

export const isProtectedRoute = (path: string): boolean => {
    return protectedRoutes.some(route => path.startsWith(route));
};

export const isPublicRoute = (path: string): boolean => {
    return publicRoutes.some(route => path === route);
};



