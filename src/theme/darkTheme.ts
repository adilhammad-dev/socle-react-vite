/**
 * Dark Theme Configuration
 *
 * Material-UI theme configuration for dark mode.
 * Includes palette, typography, spacing, and component overrides optimized for dark backgrounds.
 */

import type {ThemeOptions} from '@mui/material/styles';
import {createTheme} from '@mui/material/styles';
import {borderRadius, breakpoints, colors, shadows, spacing, transitions, zIndex} from './tokens';
import {typographyConfig} from './typography';

const darkThemeOptions: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: colors.primary.light,
            light: '#60a5fa',
            dark: colors.primary.main,
            contrastText: '#ffffff',
        },
        secondary: {
            main: colors.secondary.light,
            light: '#cbd5e1',
            dark: colors.secondary.main,
            contrastText: '#ffffff',
        },
        success: {
            main: colors.success.light,
            light: '#6ee7b7',
            dark: colors.success.main,
            contrastText: '#ffffff',
        },
        error: {
            main: colors.error.light,
            light: '#fca5a5',
            dark: colors.error.main,
            contrastText: '#ffffff',
        },
        warning: {
            main: colors.warning.light,
            light: '#fcd34d',
            dark: colors.warning.main,
            contrastText: '#ffffff',
        },
        info: {
            main: colors.info.light,
            light: '#93c5fd',
            dark: colors.info.main,
            contrastText: '#ffffff',
        },
        grey: colors.grey,
        background: {
            default: colors.grey[900],
            paper: '#ffffff',
        },
        text: {
            primary: colors.grey[50],
            secondary: colors.grey[400],
            disabled: colors.grey[600],
        },
        divider: colors.grey[700],
        action: {
            active: colors.grey[400],
            hover: 'rgba(255, 255, 255, 0.08)',
            selected: 'rgba(255, 255, 255, 0.16)',
            disabled: colors.grey[600],
            disabledBackground: colors.grey[700],
        },
    },
    typography: typographyConfig,
    shape: {
        borderRadius: borderRadius.md,
    },
    spacing: spacing.sm,
    breakpoints: {
        values: breakpoints,
    },
    zIndex: zIndex,
    transitions: {
        duration: transitions.duration,
        easing: transitions.easing,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: borderRadius.md,
                    textTransform: 'none',
                    fontWeight: 500,
                    boxShadow: shadows.none,
                    transition: `all ${transitions.duration.short}ms ${transitions.easing.easeInOut}`,
                    '&:hover': {
                        boxShadow: shadows.sm,
                    },
                },
                sizeLarge: {
                    padding: '12px 24px',
                    fontSize: '1rem',
                },
                sizeMedium: {
                    padding: '8px 16px',
                    fontSize: '0.875rem',
                },
                sizeSmall: {
                    padding: '6px 12px',
                    fontSize: '0.75rem',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: borderRadius.lg,
                    boxShadow: shadows.lg,
                    border: `1px solid ${colors.grey[700]}`,
                    backgroundImage: 'none',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: borderRadius.md,
                    backgroundImage: 'none',
                },
                elevation1: {
                    boxShadow: shadows.sm,
                },
                elevation2: {
                    boxShadow: shadows.md,
                },
                elevation3: {
                    boxShadow: shadows.lg,
                },
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    '& .MuiOutlinedInput-root': {
                        borderRadius: borderRadius.md,
                        '& fieldset': {
                            borderColor: colors.grey[700],
                        },
                        '&:hover fieldset': {
                            borderColor: colors.grey[600],
                        },
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: borderRadius.sm,
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: borderRadius.lg,
                    boxShadow: shadows.xl,
                    backgroundImage: 'none',
                },
            },
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: borderRadius.sm,
                    fontSize: '0.75rem',
                    backgroundColor: colors.grey[700],
                },
            },
        },
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: borderRadius.md,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: shadows.sm,
                    backgroundImage: 'none',
                },
            },
        },
    },
};

export const darkTheme = createTheme(darkThemeOptions);
export default darkTheme;

