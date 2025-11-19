import {Text, VStack} from '@chakra-ui/react';
import {LoadingContainer, LoadingDot, LoadingWrapper, SpinnerWrapper,} from './LoadingPage.styled';

export function LoadingPage() {
    return (
        <LoadingWrapper>
            <LoadingContainer>
                <VStack align="center">
                    <SpinnerWrapper>
                        <LoadingDot $delay={0}/>
                        <LoadingDot $delay={0.2}/>
                        <LoadingDot $delay={0.4}/>
                    </SpinnerWrapper>
                    <Text fontSize="xl" color="gray.500">
                        Loading...
                    </Text>
                </VStack>
            </LoadingContainer>
        </LoadingWrapper>
    );
}

export default LoadingPage;

