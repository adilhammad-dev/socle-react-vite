import {Link} from 'react-router-dom';
import StyledButton from 'components/ui/StyledButton';
import {NotFoundCode, NotFoundContainer, NotFoundWrapper,} from './NotFoundPage.styled';
import {Heading, Text, VStack} from "@chakra-ui/react";

export function NotFoundPage() {
    return (
        <NotFoundWrapper>
            <NotFoundContainer>
                <VStack align="center">
                    <NotFoundCode>404</NotFoundCode>
                    <Heading as="h1" size="xl" textAlign="center">
                        Page Not Found
                    </Heading>
                    <Text color="gray.600" textAlign="center" fontSize="lg">
                        The page you're looking for doesn't exist or has been moved.
                    </Text>
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <StyledButton size="lg" colorScheme="blue">
                            Back to Home
                        </StyledButton>
                    </Link>
                </VStack>
            </NotFoundContainer>
        </NotFoundWrapper>
    );
}

export default NotFoundPage;

