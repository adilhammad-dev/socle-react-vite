import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {ChakraProvider} from '@chakra-ui/react';
import {PublicClientApplication} from '@azure/msal-browser';
import {MsalProvider} from '@azure/msal-react';
import App from './App';
import store from './services/store';
import {msalConfig} from './providers/auth-provider/authConfig';
import system from './theme';
import {ThemeProvider} from "next-themes"
import './index.css';


// Create MSAL instance
const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MsalProvider instance={msalInstance}>
            <Provider store={store}>
                <ChakraProvider value={system}>
                    <ThemeProvider attribute="class" disableTransitionOnChange>
                        <App/>
                    </ThemeProvider>
                </ChakraProvider>
            </Provider>
        </MsalProvider>
    </React.StrictMode>,
);
