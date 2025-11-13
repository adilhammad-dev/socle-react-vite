import React from 'react';
import type {Preview} from '@storybook/react';
import {create} from '@storybook/theming';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import {ThemeProvider as StyledThemeProvider} from 'styled-components';
import theme from '../src/theme';

// Custom Storybook themes
const storybookLightTheme = create({
    base: 'light',
    brandTitle: 'UI Component Library',
    brandUrl: '/',
    colorPrimary: '#3182ce',
    colorSecondary: '#64748b',
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appBorderColor: '#e2e8f0',
    appBorderRadius: 8,
    textColor: '#1a202c',
    textInverseColor: '#ffffff',
    textMutedColor: '#718096',
    barTextColor: '#718096',
    barSelectedColor: '#3182ce',
    barBg: '#ffffff',
    inputBg: '#ffffff',
    inputBorder: '#e2e8f0',
    inputTextColor: '#1a202c',
    inputBorderRadius: 8
});
const storybookDarkTheme = create({
    base: 'dark',
    brandTitle: 'UI Component Library',
    brandUrl: '/',
    colorPrimary: '#63b3ed',
    colorSecondary: '#a0aec0',
    appBg: '#1a202c',
    appContentBg: '#2d3748',
    appBorderColor: '#4a5568',
    appBorderRadius: 8,
    textColor: '#f7fafc',
    textInverseColor: '#1a202c',
    textMutedColor: '#a0aec0',
    barTextColor: '#a0aec0',
    barSelectedColor: '#63b3ed',
    barBg: '#2d3748',
    inputBg: '#2d3748',
    inputBorder: '#4a5568',
    inputTextColor: '#f7fafc',
    inputBorderRadius: 8
});

const preview: Preview = {
    parameters: {
        actions: {argTypesRegex: '^on[A-Z].*'},
        controls: {
            matchers: {color: /(background|color)$/i, date: /Date$/i},
            expanded: true,
            sort: 'requiredFirst',
        },
        layout: 'padded',
        docs: {
            theme: storybookLightTheme,
            source: {state: 'open', type: 'auto'},
            canvas: {sourceState: 'shown'},
            story: {inline: true, iframeHeight: 'auto'},
            toc: true,
        },
        source: {state: 'open'},
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
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
        layout: {
            description: 'Story layout',
            defaultValue: 'stacked',
            toolbar: {
                icon: 'grid',
                items: [
                    {value: 'side-by-side', title: 'Side by Side'},
                    {value: 'stacked', title: 'Stacked'},
                ],
                dynamicTitle: true,
            },
        },
    },
    decorators: [
        (Story, context) => {
            const colorMode = context.globals.theme === 'dark' ? 'dark' : 'light';
            const layout = context.globals.layout;
            const backgroundColor = colorMode === 'dark' ? '#1a202c' : '#ffffff';

            // Détermine l'orientation
            const flexDirection = layout === 'stacked' ? 'column' : 'row';

            return (
                <>
                    <ColorModeScript initialColorMode={colorMode}/>
                    <ChakraProvider theme={{...theme, config: {...theme.config, initialColorMode: colorMode}}}>
                        <StyledThemeProvider theme={theme}>
                            <div
                                style={{
                                    backgroundColor,
                                    minHeight: '10vh',
                                    padding: '1rem',
                                    display: 'flex',
                                    flexDirection,
                                    gap: '2rem',
                                    flexWrap: 'wrap',
                                }}
                            >
                                {/* Rendu multiple : argsList contient toutes les variantes si tu utilises Storybook args */}
                                {context.argsList && context.argsList.length > 0
                                    ? context.argsList.map((args, idx) => <Story key={idx} args={args}/>)
                                    : <Story/>}
                            </div>
                        </StyledThemeProvider>
                    </ChakraProvider>
                </>
            );
        },
    ],
};

export default preview;