import {
  FooterContainer,
  FooterText,
  FooterCopyright,
} from './RouterComponents.styled';

/**
 * Footer Component
 * Application footer with branding and copyright
 *
 * Note: LoadingFallback and NotFoundPage have been moved to src/pages/
 * as LoadingPage.tsx and NotFoundPage.tsx respectively
 */
export function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        UI Component Library - Built with React + TypeScript + Material-UI
      </FooterText>
      <FooterCopyright>
        © 2025 - 59 Production-Ready Components
      </FooterCopyright>
    </FooterContainer>
  );
}
