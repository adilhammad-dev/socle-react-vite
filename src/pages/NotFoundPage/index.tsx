import { Link } from 'react-router-dom';
import { Button, Typography, Stack } from 'components/ui';
import {
  NotFoundWrapper,
  NotFoundContainer,
  NotFoundCode,
  NotFoundIllustration,
} from './NotFoundPage.styled';

/**
 * 404 Not Found Page
 * Displayed when user navigates to non-existent route
 */
export function NotFoundPage() {
  return (
    <NotFoundWrapper>
      <NotFoundContainer>
        <Stack spacing={3} alignItems="center">
          <NotFoundCode>404</NotFoundCode>
          <NotFoundIllustration>🔍</NotFoundIllustration>
          <Typography variant="h2" textAlign="center">
            Page Not Found
          </Typography>
          <Typography variant="body1" color="primary" textAlign="center">
            The page you're looking for doesn't exist or has been moved.
          </Typography>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="large">
              Back to Home
            </Button>
          </Link>
        </Stack>
      </NotFoundContainer>
    </NotFoundWrapper>
  );
}

export default NotFoundPage;

