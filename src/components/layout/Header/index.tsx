import {Box, HStack} from '@chakra-ui/react';
import {UserProfile} from 'components/auth';
import ColorModeToggle from 'components/ui/ColorModeToggle';
import {useColorModeValue} from 'theme/useColorMode';
import {colors} from 'theme';

export function Header() {
    const bgColor = useColorModeValue(colors.light.bg.secondary, colors.dark.bg.secondary);
    const borderColor = useColorModeValue(colors.light.border.default, colors.dark.border.default);

    return (
        <Box
            as="header"
            w="100%"
            bg={bgColor}
            borderBottom="1px"
            borderColor={borderColor}
            px={4}
            py={3}
            position="sticky"
            top={0}
            zIndex={1000}
            boxShadow="sm"
        >
            <HStack justify="flex-end" gap={2}>
                <ColorModeToggle/>
                <UserProfile/>
            </HStack>
        </Box>
    );
}

export default Header;