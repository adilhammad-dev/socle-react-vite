import { Button } from 'components/ui';
import {
  HomeContainer,
  HomeContent,
  HomeTitle,
  HomeSubtitle,
  ButtonGroup,
  Section,
  SectionTitle,
  FeatureGrid,
  FeatureCard,
  FeatureTitle,
  FeatureDescription,
  CategoryList,
} from './HomeView.styled';

interface HomeViewProps {
  onNavigate: (path: string) => void;
}

/**
 * Home View - Pure presentational component
 */
export function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitle>UI Component Library</HomeTitle>

        <HomeSubtitle>
          A comprehensive, production-ready React + TypeScript UI component library
        </HomeSubtitle>

        <ButtonGroup>
          <Button variant="primary" size="large" onClick={() => onNavigate('/components')}>
            Browse Components
          </Button>
          <Button variant="outline" size="large" onClick={() => onNavigate('/dashboard')}>
            View Dashboard
          </Button>
        </ButtonGroup>

        <Section>
          <SectionTitle>Features</SectionTitle>

          <FeatureGrid>
            <FeatureCard>
              <FeatureTitle>🎨 58+ Components</FeatureTitle>
              <FeatureDescription>
                Comprehensive set of UI components including forms, navigation, feedback, data display, and more.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>💪 TypeScript First</FeatureTitle>
              <FeatureDescription>
                Full TypeScript support with comprehensive prop types and IntelliSense.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>♿ Accessible</FeatureTitle>
              <FeatureDescription>
                Built with accessibility in mind. ARIA attributes and keyboard navigation included.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureTitle>📱 Responsive</FeatureTitle>
              <FeatureDescription>
                Mobile-first design with responsive breakpoints for all screen sizes.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </Section>

        <Section>
          <SectionTitle>Component Categories</SectionTitle>

          <CategoryList>
            <Button variant="outline" fullWidth onClick={() => onNavigate('/basic')}>
              Basic Elements (7 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => onNavigate('/form')}>
              Form Elements (10 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => onNavigate('/navigation')}>
              Navigation (9 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => onNavigate('/feedback')}>
              Feedback (9 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => onNavigate('/data-display')}>
              Data Display (8 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => onNavigate('/layout')}>
              Layout (8 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => onNavigate('/visualization')}>
              Visualization (3 components)
            </Button>
            <Button variant="outline" fullWidth onClick={() => onNavigate('/advanced')}>
              Advanced (5 components)
            </Button>
          </CategoryList>
        </Section>
      </HomeContent>
    </HomeContainer>
  );
}

