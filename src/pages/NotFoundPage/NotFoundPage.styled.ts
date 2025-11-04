import styled, { keyframes } from 'styled-components';

export const NotFoundWrapper = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.palette.background.default};
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
  color: ${({ theme }) => theme.palette.primary.main};
  opacity: 0.2;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 5rem;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const NotFoundIllustration = styled.div`
  font-size: 5rem;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

