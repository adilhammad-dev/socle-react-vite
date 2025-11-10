import {useState} from 'react';
import {useMsal} from '@azure/msal-react';
import {loginRequest} from 'config/authConfig';
import {
  ErrorMessage,
  FeatureItem,
  FeaturesList,
  InfoText,
  LoadingSpinner,
  LoginButton,
  LoginCard,
  LoginPageWrapper,
  LogoContainer,
  MicrosoftLogo,
  Subtitle,
  Title,
} from './LoginPage.styled';

/**
 * Microsoft Logo SVG Component
 */
const MicrosoftIcon = () => (
    <MicrosoftLogo viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="10" height="10" fill="#F25022"/>
        <rect x="11" width="10" height="10" fill="#7FBA00"/>
        <rect y="11" width="10" height="10" fill="#00A4EF"/>
        <rect x="11" y="11" width="10" height="10" fill="#FFB900"/>
    </MicrosoftLogo>
);

/**
 * Login Page Component
 *
 * Provides Microsoft Azure AD authentication interface
 */
export function LoginPage() {
    const {instance} = useMsal();
    const [error, setError] = useState<string | null>(null);
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const handleLogin = async () => {
        setError(null);
        setIsLoggingIn(true);

        try {
            await instance.loginPopup(loginRequest);
            // AuthenticatedTemplate will automatically show after successful login
        } catch (err: any) {
            console.error('Login failed:', err);

            // Handle specific error cases
            if (err.errorCode === 'user_cancelled') {
                setError('Login was cancelled. Please try again.');
            } else if (err.errorCode === 'popup_window_error') {
                setError('Unable to open login popup. Please check your browser settings.');
            } else {
                setError('Login failed. Please try again or contact support.');
            }
        } finally {
            setIsLoggingIn(false);
        }
    };


    return (
        <LoginPageWrapper>
            <LoginCard>
                <LogoContainer>
                    {/* Replace with your app logo if available */}
                    <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
                        <circle cx="50" cy="50" r="40" opacity="0.1"/>
                        <path d="M50 20 L65 40 L50 35 L35 40 Z"/>
                        <path d="M50 35 L50 80" strokeWidth="6" stroke="currentColor" fill="none"/>
                        <circle cx="50" cy="80" r="8"/>
                    </svg>
                </LogoContainer>

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

                <FeaturesList>
                    <FeatureItem>Secure Azure AD authentication</FeatureItem>
                    <FeatureItem>Single sign-on (SSO) enabled</FeatureItem>
                    <FeatureItem>Access your personalized dashboard</FeatureItem>
                </FeaturesList>
            </LoginCard>
        </LoginPageWrapper>
    );
}

export default LoginPage;

