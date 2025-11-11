import {PublicClientApplication} from '@azure/msal-browser';
import {msalConfig} from "providers/auth-provider/authConfig.ts";

export const msalInstance = new PublicClientApplication(msalConfig);

export default msalInstance;
