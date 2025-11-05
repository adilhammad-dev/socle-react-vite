import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

export const LoginPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
`;

export const LoginCard = styled.div`
  background: ${({ theme }: { theme: Theme }) => theme.palette.background.paper};
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  padding: 3rem;
  max-width: 450px;
  width: 100%;
  text-align: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 2rem;
  
  img {
    max-width: 80px;
    height: auto;
  }
  
  svg {
    width: 80px;
    height: 80px;
    color: ${({ theme }: { theme: Theme }) => theme.palette.primary.main};
  }
`;

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.primary};
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  margin-bottom: 2rem;
`;

export const LoginButton = styled.button`
  font-family: 'Inter', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: #2563eb;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);

  &:hover:not(:disabled) {
    background: #1d4ed8;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 99, 235, 0.5);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const MicrosoftLogo = styled.svg`
  width: 21px;
  height: 21px;
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.disabled};
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }: { theme: Theme }) => theme.palette.divider};
  }
  
  &::before {
    margin-right: 1rem;
  }
  
  &::after {
    margin-left: 1rem;
  }
`;

export const InfoText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  line-height: 1.6;
  margin-top: 1.5rem;
`;

export const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
  text-align: left;
`;

export const FeatureItem = styled.li`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '✓';
    color: ${({ theme }: { theme: Theme }) => theme.palette.success.main};
    font-weight: bold;
    font-size: 1rem;
  }
`;

export const ErrorMessage = styled.div`
  background: ${({ theme }: { theme: Theme }) => theme.palette.error.light};
  color: ${({ theme }: { theme: Theme }) => theme.palette.error.dark};
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  text-align: left;
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

