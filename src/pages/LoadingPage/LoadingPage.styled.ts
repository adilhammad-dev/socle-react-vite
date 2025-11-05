import styled, {keyframes} from 'styled-components';

export const LoadingWrapper = styled.div`
    min-height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.palette.background.default};
`;

export const LoadingContainer = styled.div`
    text-align: center;
`;

export const SpinnerWrapper = styled.div`
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    align-items: center;
`;

const bounce = keyframes`
    0%, 80%, 100% {
        transform: scale(0);
        opacity: 0.5;
    }
    40% {
        transform: scale(1);
        opacity: 1;
    }
`;

export const LoadingDot = styled.div<{ $delay: number }>`
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${({theme}) => theme.palette.primary.main};
    animation: ${bounce} 1.4s infinite ease-in-out both;
    animation-delay: ${({$delay}) => $delay}s;
`;

