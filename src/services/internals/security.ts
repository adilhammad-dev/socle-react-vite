let getAccessTokenSilently: ((options?: any) => Promise<string | null>) | undefined;

interface SecurityType {
    getAccessTokenFunction: () => typeof getAccessTokenSilently;
    setAccessTokenFunction: (func: typeof getAccessTokenSilently) => void;
}

export const security: SecurityType = {
    getAccessTokenFunction: () => getAccessTokenSilently,
    setAccessTokenFunction: (func) => {
        getAccessTokenSilently = func;
    },
};
