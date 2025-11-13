import type {StorybookConfig} from '@storybook/react-vite';
import {fileURLToPath, URL} from 'node:url';
import {mergeConfig} from 'vite';

const config: StorybookConfig = {
    stories: [
        '../src/**/*.mdx',
        '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
        '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: true,
                controls: true,
                docs: true,
                viewport: true,
                actions: true,
                measure: true,
                outline: true,
                toolbars: true,
            },
        },
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
        defaultName: 'Documentation',
    },
    typescript: {
        check: false,
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        },
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            resolve: {
                alias: {
                    '@': fileURLToPath(new URL('../src', import.meta.url)),
                    'services': fileURLToPath(new URL('../src/services', import.meta.url)),
                    'components': fileURLToPath(new URL('../src/components', import.meta.url)),
                    'containers': fileURLToPath(new URL('../src/containers', import.meta.url)),
                    'pages': fileURLToPath(new URL('../src/pages', import.meta.url)),
                    'routes': fileURLToPath(new URL('../src/routes', import.meta.url)),
                    'types': fileURLToPath(new URL('../src/types', import.meta.url)),
                    'utils': fileURLToPath(new URL('../src/utils', import.meta.url)),
                    'hooks': fileURLToPath(new URL('../src/hooks', import.meta.url)),
                    'examples': fileURLToPath(new URL('../src/examples', import.meta.url)),
                    'theme': fileURLToPath(new URL('../src/theme', import.meta.url)),
                    'providers': fileURLToPath(new URL('../src/providers', import.meta.url)),
                },
            },
        });
    },
};

export default config;