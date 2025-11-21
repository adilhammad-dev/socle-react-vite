import {Box, HStack} from '@chakra-ui/react';
import {UserProfile} from 'components/auth';

export function Header() {
    return (
        <Box
            as="header"
            w="100%"
            borderBottom="1px"
            borderStyle="solid"
            borderColor="border.default"
            bg="bg.primary"
            backgroundColor="bg.primary"
            px={4}
            py={3}
            position="sticky"
            top={0}
            zIndex={1000}
        >
            <HStack justify="flex-end" gap={2}>
                <UserProfile/>
            </HStack>
        </Box>
    );
}

export default Header;