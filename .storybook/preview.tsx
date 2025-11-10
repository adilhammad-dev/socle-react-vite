import type {Preview} from '@storybook/react';
import {create} from '@storybook/theming';
import {CssBaseline, ThemeProvider as MuiThemeProvider} from '@mui/material';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import {darkTheme, lightTheme} from 'theme';

// Create custom Storybook themes for docs
const storybookLightTheme = create({
    base: 'light',
    brandTitle: 'UI Component Library',
    brandUrl: '/',
    brandTarget: '_self',
    colorPrimary: '#2563eb',
    colorSecondary: '#64748b',
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#e2e8f0',
    appBorderRadius: 8,
    textColor: '#0f172a',
    textInverseColor: '#ffffff',
    textMutedColor: '#64748b',
    barTextColor: '#64748b',
    barSelectedColor: '#2563eb',
    barBg: '#ffffff',
    inputBg: '#ffffff',
    inputBorder: '#e2e8f0',
    inputTextColor: '#0f172a',
    inputBorderRadius: 8,
});

const storybookDarkTheme = create({
    base: 'dark',
    brandTitle: 'UI Component Library',
    brandUrl: '/',
    brandTarget: '_self',
    colorPrimary: '#3b82f6',
    colorSecondary: '#94a3b8',
    appBg: '#0f172a',
    appContentBg: '#1e293b',
    appBorderColor: '#334155',
    appBorderRadius: 8,
    textColor: '#f8fafc',
    textInverseColor: '#0f172a',
    textMutedColor: '#94a3b8',
    barTextColor: '#94a3b8',
    barSelectedColor: '#3b82f6',
    barBg: '#1e293b',
    inputBg: '#1e293b',
    inputBorder: '#334155',
    inputTextColor: '#f8fafc',
    inputBorderRadius: 8,
});

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        backgrounds: {
            disable: true,
        },
        layout: 'centered',
        docs: {
            theme: storybookLightTheme,
            source: {
                state: 'open',
            },
            canvas: {
                sourceState: 'shown',
            },
        },
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: [
                    {value: 'light', icon: 'sun', title: 'Light'},
                    {value: 'dark', icon: 'moon', title: 'Dark'},
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const isDark = context.globals.theme === 'dark';
            const theme = isDark ? darkTheme : lightTheme;
            const backgroundColor = isDark ? '#0f172a' : '#f8fafc';

            // Update docs theme dynamically
            if (context.parameters.docs) {
                context.parameters.docs.theme = isDark ? storybookDarkTheme : storybookLightTheme;
            }

            return (
                <MuiThemeProvider theme={theme}>
                    <StyledThemeProvider theme={theme}>
                        <CssBaseline/>
                        <div style={{
                            padding: '20px',
                            backgroundColor,
                            minHeight: '100vh',
                            minWidth: '100%',
                        }}>
                            <Story/>
                        </div>
                    </StyledThemeProvider>
                </MuiThemeProvider>
            );
        },
    ],
};

export default preview;

