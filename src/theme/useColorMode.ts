import React, {createContext, type ReactNode, useContext, useEffect, useState} from 'react';

type ColorMode = 'light' | 'dark';

interface ColorModeContextType {
    colorMode: ColorMode;
    toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextType | undefined>(undefined);

interface ColorModeProviderProps {
    children: ReactNode;
}

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({children}) => {
    const [colorMode, setColorMode] = useState<ColorMode>(() => {
        // Check localStorage first
        const saved = localStorage.getItem('chakra-ui-color-mode');
        if (saved === 'light' || saved === 'dark') {
            return saved;
        }

        // Check system preference
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        return 'light';
    });

    const toggleColorMode = () => {
        setColorMode(prev => {
            const newMode = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('chakra-ui-color-mode', newMode);
            return newMode;
        });
    };

    useEffect(() => {
        // Update document class for CSS
        document.documentElement.setAttribute('data-theme', colorMode);
        document.documentElement.style.colorScheme = colorMode;
    }, [colorMode]);

    return React.createElement(
        ColorModeContext.Provider,
        {value: {colorMode, toggleColorMode}},
        children
    );
};

export function useColorMode() {
    const context = useContext(ColorModeContext);
    if (context === undefined) {
        throw new Error('useColorMode must be used within a ColorModeProvider');
    }
    return context;
}

export function useColorModeValue<T>(lightValue: T, darkValue: T): T {
    const {colorMode} = useColorMode();
    return colorMode === 'light' ? lightValue : darkValue;
}
