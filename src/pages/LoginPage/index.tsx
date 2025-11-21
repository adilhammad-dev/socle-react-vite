import {useState} from 'react';
import {Box, Heading, VStack} from '@chakra-ui/react';
import {useAuthService} from 'providers/auth-provider/hooks';
import {ErrorMessage, LoadingSpinner, LoginCard, LoginPageWrapper,} from './LoginPage.styled';
import StyledButton from "components/ui/StyledButton";

export function LoginPage() {
    const {loginWithPopup} = useAuthService();
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async () => {
        setError(null);
        setIsLoggingIn(true);

        const result = await loginWithPopup();

        if (!result.success && result.error) {
            setError(result.error.userMessage);
        }

        setIsLoggingIn(false);
    };

    return (
        <LoginPageWrapper>

            <LoginCard>
                <VStack align="center">
                    <Heading
                        as="h1"
                        size="xl"
                        textAlign="center"
                    >
                        Welcome
                    </Heading>

                    <Box textAlign="center" color="gray.500">
                        Sign in with your Microsoft account
                    </Box>

                    {error && <ErrorMessage>{error}</ErrorMessage>}

                    <StyledButton onClick={handleLogin} disabled={isLoggingIn}>
                        {isLoggingIn ? (
                            <>
                                <LoadingSpinner/>
                                Signing in...
                            </>
                        ) : (
                            'Sign in with Microsoft'
                        )}
                    </StyledButton>
                </VStack>
            </LoginCard>
        </LoginPageWrapper>
    );
}

export default LoginPage;