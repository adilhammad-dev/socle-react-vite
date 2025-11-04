import styled from 'styled-components';
import type { Theme } from '@mui/material/styles';

/**
 * Footer Styled Wrappers
 *
 * Note: LoadingFallback and NotFoundPage styles have been moved to:
 * - src/pages/LoadingPage.styled.ts
 * - src/pages/NotFoundPage.styled.ts
 */
export const FooterContainer = styled.footer`
  background-color: ${({ theme }: { theme: Theme }) => theme.palette.background.paper};
  border-top: 1px solid ${({ theme }: { theme: Theme }) => theme.palette.divider};
  padding: 24px 16px;
  text-align: center;
`;

export const FooterText = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  font-size: 0.875rem;
`;

export const FooterCopyright = styled.div`
  color: ${({ theme }: { theme: Theme }) => theme.palette.text.secondary};
  font-size: 0.75rem;
  margin-top: 4px;
`;

