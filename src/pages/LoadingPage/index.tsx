import {Stack, Typography} from 'components/ui';
import {LoadingContainer, LoadingDot, LoadingWrapper, SpinnerWrapper,} from './LoadingPage.styled';

/**
 * Loading Page
 * Used as Suspense fallback while lazy-loaded pages are being fetched
 */
export function LoadingPage() {
    return (
        <LoadingWrapper>
            <LoadingContainer>
                <Stack spacing={3} alignItems="center">
                    <SpinnerWrapper>
                        <LoadingDot $delay={0}/>
                        <LoadingDot $delay={0.2}/>
                        <LoadingDot $delay={0.4}/>
                    </SpinnerWrapper>
                    <Typography variant="h5" color="textSecondary">
                        Loading...
                    </Typography>
                </Stack>
            </LoadingContainer>
        </LoadingWrapper>
    );
}

export default LoadingPage;

