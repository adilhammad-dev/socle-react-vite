import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    '@storybook/addon-styling'
  ],
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: true,
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    check: false,
  },
  viteFinal: async (baseConfig) => {
    return mergeConfig(baseConfig, {
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../src', import.meta.url)),
          services: fileURLToPath(new URL('../src/services', import.meta.url)),
          components: fileURLToPath(new URL('../src/components', import.meta.url)),
          containers: fileURLToPath(new URL('../src/containers', import.meta.url)),
          pages: fileURLToPath(new URL('../src/pages', import.meta.url)),
          types: fileURLToPath(new URL('../src/types', import.meta.url)),
          utils: fileURLToPath(new URL('../src/utils', import.meta.url)),
        },
      },
    });
  },
};

export default config;
