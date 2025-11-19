import {createSystem, defaultConfig} from '@chakra-ui/react';

// Custom colors for light and dark modes
export const colors = {
    // Light mode colors
    light: {
        bg: {
            primary: '#FFFFFF',
            secondary: '#F7FAFC',
            tertiary: '#EDF2F7',
        },
        text: {
            primary: '#1A202C',
            secondary: '#4A5568',
            tertiary: '#718096',
        },
        border: {
            default: '#E2E8F0',
            hover: '#CBD5E0',
        },
    },
    dark: {
        bg: {
            primary: '#0B0C10',
            secondary: '#1F2833',
            tertiary: '#2E3A47',
        },
        text: {
            primary: '#FFFFFF',
            secondary: '#C5C6C7',
            tertiary: '#9EA7AD',
        },
        border: {
            default: '#2E3A47',
            hover: '#3F4E5A',
        }
    },
};

// Create custom system configuration for Chakra UI V3
const system = createSystem(defaultConfig, {
    // Theme tokens
    theme: {
        tokens: {
            fonts: {
                heading: {value: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},
                body: {value: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"},
                mono: {value: "'Fira Code', 'Courier New', monospace"},
            },
            fontSizes: {
                xs: {value: '0.75rem'},
                sm: {value: '0.875rem'},
                md: {value: '1rem'},
                lg: {value: '1.125rem'},
                xl: {value: '1.25rem'},
                '2xl': {value: '1.5rem'},
                '3xl': {value: '1.875rem'},
                '4xl': {value: '2.25rem'},
                '5xl': {value: '3rem'},
                '6xl': {value: '3.75rem'},
                '7xl': {value: '4.5rem'},
                '8xl': {value: '6rem'},
                '9xl': {value: '8rem'},
            },
            fontWeights: {
                light: {value: 300},
                normal: {value: 400},
                medium: {value: 500},
                semibold: {value: 600},
                bold: {value: 700},
            },
            radii: {
                none: {value: '0'},
                sm: {value: '0.125rem'},
                base: {value: '0.25rem'},
                md: {value: '0.375rem'},
                lg: {value: '0.5rem'},
                xl: {value: '0.75rem'},
                '2xl': {value: '1rem'},
                '3xl': {value: '1.5rem'},
                full: {value: '9999px'},
            },
            shadows: {
                xs: {value: '0 0 0 1px rgba(0, 0, 0, 0.05)'},
                sm: {value: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'},
                base: {value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'},
                md: {value: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'},
                lg: {value: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'},
                xl: {value: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'},
                '2xl': {value: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'},
                outline: {value: '0 0 0 3px rgba(66, 153, 225, 0.6)'},
                inner: {value: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'},
                none: {value: 'none'},
                'dark-lg': {value: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px'},
            },
        },
        semanticTokens: {
            colors: {
                'bg-primary': {
                    value: {base: colors.light.bg.primary, _dark: colors.dark.bg.primary},
                },
                'bg-secondary': {
                    value: {base: colors.light.bg.secondary, _dark: colors.dark.bg.secondary},
                },
                'bg-tertiary': {
                    value: {base: colors.light.bg.tertiary, _dark: colors.dark.bg.tertiary},
                },
                'text-primary': {
                    value: {base: colors.light.text.primary, _dark: colors.dark.text.primary},
                },
                'text-secondary': {
                    value: {base: colors.light.text.secondary, _dark: colors.dark.text.secondary},
                },
                'text-tertiary': {
                    value: {base: colors.light.text.tertiary, _dark: colors.dark.text.tertiary},
                },
                'border-default': {
                    value: {base: colors.light.border.default, _dark: colors.dark.border.default},
                },
                'border-hover': {
                    value: {base: colors.light.border.hover, _dark: colors.dark.border.hover},
                },
                'chakra-body-text': {
                    value: {base: colors.light.text.primary, _dark: colors.dark.text.primary},
                },
                'chakra-body-bg': {
                    value: {base: colors.light.bg.primary, _dark: colors.dark.bg.primary},
                },
                'chakra-border-color': {
                    value: {base: colors.light.border.default, _dark: colors.dark.border.default},
                },
            },
        },
    },

    // Global styles
    globalCss: {
        body: {
            bg: {base: colors.light.bg.primary, _dark: colors.dark.bg.primary},
            color: {base: colors.light.text.primary, _dark: colors.dark.text.primary},
            fontFamily: 'body',
            transition: 'background-color 0.2s, color 0.2s',
        },
        '*::placeholder': {
            color: {base: colors.light.text.tertiary, _dark: colors.dark.text.tertiary},
        },
    },
});

// Export the system (ChakraProvider uses value prop in v3)
export default system;
