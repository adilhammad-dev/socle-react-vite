import {memo, useCallback, useState} from 'react';
import {useMsal} from '@azure/msal-react';
import {loginRequest} from 'providers/auth-provider/authConfig';
import {
    ErrorMessage,
    InfoText,
    LoadingSpinner,
    LoginButton,
    LoginCard,
    LoginPageWrapper,
    MicrosoftLogo,
    Subtitle,
    Title,
} from './LoginPage.styled';

const MicrosoftIcon = memo(() => (
    <MicrosoftLogo viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" fill="#F25022"/>
        <rect x="11" width="10" height="10" fill="#7FBA00"/>
        <rect y="11" width="10" height="10" fill="#00A4EF"/>
        <rect x="11" y="11" width="10" height="10" fill="#FFB900"/>
    </MicrosoftLogo>
));
MicrosoftIcon.displayName = 'MicrosoftIcon';

export function LoginPage() {
    const {instance} = useMsal();
    const [error, setError] = useState<string | null>(null);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = useCallback(async () => {
        setError(null);
        setIsLoggingIn(true);

        try {
            await instance.loginPopup(loginRequest);
        } catch (err: any) {
            const errorCode = err.errorCode;

            if (errorCode === 'user_cancelled') {
                setError('Login was cancelled. Please try again.');
            } else if (errorCode === 'popup_window_error') {
                setError('Unable to open login popup. Please check your browser settings.');
            } else {
                setError('Login failed. Please try again or contact support.');
            }
        } finally {
            setIsLoggingIn(false);
        }
    }, [instance]);


    return (
        <LoginPageWrapper>
            <LoginCard>

                <Title>Welcome Back</Title>
                <Subtitle>Sign in with your Microsoft account to continue</Subtitle>

                {error && <ErrorMessage>{error}</ErrorMessage>}

                <LoginButton
                    onClick={handleLogin}
                    disabled={isLoggingIn}
                >
                    {isLoggingIn ? (
                        <>
                            <LoadingSpinner/>
                            Signing in...
                        </>
                    ) : (
                        <>
                            <MicrosoftIcon/>
                            Sign in with Microsoft
                        </>
                    )}
                </LoginButton>

                <InfoText>
                    By signing in, you agree to our Terms of Service and Privacy Policy.
                </InfoText>

            </LoginCard>
        </LoginPageWrapper>
    );
}

export default LoginPage;

