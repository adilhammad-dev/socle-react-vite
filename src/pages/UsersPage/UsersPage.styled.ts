import styled from 'styled-components';
import type {Theme} from '@mui/material/styles';

export const PageWrapper = styled.div`
    min-height: 100vh;
    background: ${({theme}: { theme: Theme }) =>
            theme.palette.mode === 'dark'
                    ? `linear-gradient(135deg, ${theme.palette.grey[900]} 0%, ${theme.palette.grey[800]} 100%)`
                    : `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
    };
    padding: ${({theme}: { theme: Theme }) => theme.spacing(5, 2.5)};
    transition: background 0.3s ease;
`;

export const PageContainer = styled.div`
    max-width: 1400px;
    margin: 0 auto;
`;

export const PageHeader = styled.header`
    margin-bottom: ${({theme}: { theme: Theme }) => theme.spacing(4)};
    text-align: center;
    position: relative;
`;

export const HeaderActions = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    gap: ${({theme}: { theme: Theme }) => theme.spacing(1)};
    align-items: center;
`;

export const PageTitle = styled.h1`
    color: ${({theme}: { theme: Theme }) => theme.palette.primary.contrastText};
    font-size: ${({theme}: { theme: Theme }) => theme.typography.h2.fontSize};
    font-weight: ${({theme}: { theme: Theme }) => theme.typography.h2.fontWeight};
    font-family: ${({theme}: { theme: Theme }) => theme.typography.h2.fontFamily};
    margin: 0 0 ${({theme}: { theme: Theme }) => theme.spacing(2)} 0;
    text-shadow: ${({theme}: { theme: Theme }) =>
            theme.palette.mode === 'dark'
                    ? '2px 2px 8px rgba(0, 0, 0, 0.5)'
                    : '2px 2px 4px rgba(0, 0, 0, 0.2)'
    };
`;

export const PageSubtitle = styled.p`
    color: ${({theme}: { theme: Theme }) =>
            theme.palette.mode === 'dark'
                    ? 'rgba(255, 255, 255, 0.8)'
                    : 'rgba(255, 255, 255, 0.9)'
    };
    font-size: ${({theme}: { theme: Theme }) => theme.typography.body1.fontSize};
    margin: 0;
`;

export const ContentCard = styled.div`
    background: ${({theme}: { theme: Theme }) => theme.palette.background.paper};
    border-radius: ${({theme}: { theme: Theme }) => `${theme.shape.borderRadius}px`};
    box-shadow: ${({theme}: { theme: Theme }) => theme.shadows[10]};
    overflow: hidden;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
`;

