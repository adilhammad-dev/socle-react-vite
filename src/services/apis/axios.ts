import Axios from 'axios';
import GlobalConfig from 'services/internals/global-config';
import {security} from 'services/internals/security';

const customRequest = Axios.create({
    baseURL: GlobalConfig.api.BACKEND_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
    },
});

customRequest.interceptors.request.use(
    async (config) => {
        try {
            const getTokenFn = security.getAccessTokenFunction();

            if (getTokenFn) {
                const accessToken = await getTokenFn();

                if (accessToken) {
                    config.headers.Authorization = `Bearer ${accessToken}`;
                }
            }
        } catch (error) {
            console.error('Error acquiring token:', error);
        }

        return config;
    },
    (error) => Promise.reject(error)
);

customRequest.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 && !window.location.pathname.includes('/users')) {
            window.location.href = '/users';
        }
        return Promise.reject(error);
    }
);

export default customRequest;
