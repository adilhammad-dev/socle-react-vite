import type { Preview } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../src/services/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../src/styles/GlobalStyle';
import { lightTheme } from '../src/styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#FFFFFF' },
        { name: 'dark', value: '#1A1A1A' },
      ],
    },
    layout: 'centered',
    docs: {
      source: {
        state: 'open',
      },
    },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={lightTheme}>
            <GlobalStyle />
            <Story />
          </ThemeProvider>
        </QueryClientProvider>
      </Provider>
    ),
  ],
};

export default preview;

