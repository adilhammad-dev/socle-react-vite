import {PublicClientApplication} from '@azure/msal-browser';
import {loginRequest, msalConfig, tokenRequest} from 'config/authConfig';

export const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
export {loginRequest, tokenRequest, msalConfig};
