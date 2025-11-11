import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import store from 'services/store'
import {ThemeProvider} from 'theme/ThemeContext'
import AuthProvider from './providers/auth-provider/AuthProvider'
import App from './App'
import './index.css'
import {CssBaseline} from "@mui/material";
import {GlobalStyle} from "./GlobalStyle.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <CssBaseline/>
            <Provider store={store}>
                <AuthProvider>
                    <App/>
                </AuthProvider>
            </Provider>
            <GlobalStyle/>
        </ThemeProvider>
    </StrictMode>,
);
