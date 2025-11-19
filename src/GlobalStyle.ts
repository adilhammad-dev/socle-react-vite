import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: 'liga' 1, 'calt' 1; /* Enable ligatures for Inter */
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    /* Headings use Poppins for visual distinction */
    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        font-feature-settings: normal;
    }

    /* Code elements use monospace font */
    code, kbd, samp, pre {
        font-family: 'Fira Code', 'JetBrains Mono', 'Source Code Pro', Menlo, Monaco, Consolas, 'Courier New', monospace;
        font-feature-settings: 'liga' 1, 'calt' 1; /* Enable code ligatures */
    }

    /* Theme-aware body background */
    body.light {
        background-color: #FFFFFF;
        color: #1A202C;
    }

    body.dark {
        background-color: #1A202C;
        color: #F7FAFC;
    }

    /* Ensure html element also gets theme class */
    html.light {
        background-color: #FFFFFF;
    }

    html.dark {
        background-color: #1A202C;
    }
`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    transition: background-color 0.2s ease;
`;

export const MainContent = styled.main<{ $colorMode?: 'light' | 'dark' }>`
    flex-grow: 1;
    background-color: ${props => {
        const mode = props.$colorMode || (typeof window !== 'undefined' 
            ? document.documentElement.classList.contains('dark') ? 'dark' : 'light'
            : 'light');
        return mode === 'dark' ? '#1A202C' : '#FFFFFF';
    }};
    color: ${props => {
        const mode = props.$colorMode || (typeof window !== 'undefined' 
            ? document.documentElement.classList.contains('dark') ? 'dark' : 'light'
            : 'light');
        return mode === 'dark' ? '#F7FAFC' : '#1A202C';
    }};
    transition: background-color 0.2s ease, color 0.2s ease;
`;

