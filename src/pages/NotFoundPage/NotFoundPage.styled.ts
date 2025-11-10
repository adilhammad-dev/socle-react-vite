import styled from 'styled-components';

export const NotFoundWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.palette.background.default};
    padding: 2rem;
`;

export const NotFoundContainer = styled.div`
    max-width: 600px;
    width: 100%;
    text-align: center;
`;

export const NotFoundCode = styled.div`
    font-size: 8rem;
    font-weight: 700;
    line-height: 1;
    color: ${({theme}) => theme.palette.primary.main};
    opacity: 0.2;
    user-select: none;

    @media (max-width: 768px) {
        font-size: 5rem;
    }
`;