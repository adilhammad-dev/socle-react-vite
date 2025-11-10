import {Link} from 'react-router-dom';
import {Button, Stack, Typography} from 'components/ui';
import {NotFoundCode, NotFoundContainer, NotFoundWrapper,} from './NotFoundPage.styled';

export function NotFoundPage() {
    return (
        <NotFoundWrapper>
            <NotFoundContainer>
                <Stack spacing={3} alignItems="center">
                    <NotFoundCode>404</NotFoundCode>
                    <Typography variant="h2" textAlign="center">
                        Page Not Found
                    </Typography>
                    <Typography color="primary" textAlign="center">
                        The page you're looking for doesn't exist or has been moved.
                    </Typography>
                    <Link to="/" style={{textDecoration: 'none'}}>
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

