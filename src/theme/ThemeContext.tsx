import type {ReactNode} from 'react';
import {createContext, useContext, useMemo, useState} from 'react';
import {ThemeProvider as MuiThemeProvider} from '@mui/material/styles';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from './index';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
    mode: ThemeMode;
    toggleTheme: () => void;
    setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [mode, setMode] = useState<ThemeMode>(() => {
        const savedMode = localStorage.getItem('theme-mode');
        return (savedMode === 'dark' || savedMode === 'light') ? savedMode : 'light';
    });

    const toggleTheme = () => {
        setMode((prevMode) => {
            const newMode = prevMode === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme-mode', newMode);
            return newMode;
        });
    };

    const setThemeMode = (newMode: ThemeMode) => {
        setMode(newMode);
        localStorage.setItem('theme-mode', newMode);
    };

    const theme = useMemo(() => mode === 'light' ? lightTheme : darkTheme, [mode]);

    const contextValue = useMemo(
        () => ({mode, toggleTheme, setThemeMode}),
        [mode]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <MuiThemeProvider theme={theme}>
                <StyledThemeProvider theme={theme}>
                    {children}
                </StyledThemeProvider>
            </MuiThemeProvider>
        </ThemeContext.Provider>
    );
};

