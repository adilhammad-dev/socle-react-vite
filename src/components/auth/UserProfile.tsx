import {useState} from 'react';
import {
    Avatar,
    Button,
    HStack,
    Menu,
    Spinner,
    Text,
    VStack,
} from '@chakra-ui/react';
import {useColorMode, useColorModeValue} from 'theme/useColorMode';
import {FaChevronDown, FaMoon, FaSignOutAlt, FaSun} from 'react-icons/fa';
import {useAuthService, useUserInfo} from 'providers/auth-provider/hooks';

/**
 * User Profile Component
 * Displays user information and logout functionality
 */
export function UserProfile() {
    const userInfo = useUserInfo();
    const {logoutWithPopup} = useAuthService();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const {colorMode, toggleColorMode} = useColorMode();

    const bgColor = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('gray.200', 'gray.600');

    if (!userInfo.isAuthenticated) {
        return null;
    }

    const handleLogout = async () => {
        setIsLoggingOut(true);
        await logoutWithPopup();
        setIsLoggingOut(false);
    };

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    p={2}
                    bg={bgColor}
                    border="1px"
                    borderColor={borderColor}
                    _hover={{
                        bg: useColorModeValue('gray.50', 'gray.700'),
                    }}
                    disabled={isLoggingOut}
                >
                    <HStack gap={3}>
                        <Avatar.Root size="sm">
                            <Avatar.Image src="" alt={userInfo.name} />
                            <Avatar.Fallback bg="blue.500" color="white">
                                {userInfo.name?.charAt(0)?.toUpperCase() || 'U'}
                            </Avatar.Fallback>
                        </Avatar.Root>
                        <VStack align="start" display={{base: 'none', md: 'flex'}} gap={0}>
                            <Text fontSize="sm" fontWeight="medium" lineHeight="1.2">
                                {userInfo.name}
                            </Text>
                            <Text fontSize="xs" color="gray.500" lineHeight="1.2">
                                {userInfo.email}
                            </Text>
                        </VStack>
                        <FaChevronDown size={12}/>
                    </HStack>
                </Button>
            </Menu.Trigger>

            <Menu.Positioner>
                <Menu.Content>
                    <VStack align="start" px={3} py={2} display={{base: 'flex', md: 'none'}}>
                        <Text fontSize="sm" fontWeight="medium">
                            {userInfo.name}
                        </Text>
                        <Text fontSize="xs" color="gray.500">
                            {userInfo.email}
                        </Text>
                    </VStack>

                    <Menu.Separator display={{base: 'block', md: 'none'}}/>

                    <Menu.Item
                        value="toggle-color-mode"
                        onClick={toggleColorMode}
                    >
                        <HStack gap={2}>
                            {colorMode === 'light' ? <FaMoon/> : <FaSun/>}
                            <Text>{colorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</Text>
                        </HStack>
                    </Menu.Item>

                    <Menu.Separator/>

                    <Menu.Item
                        value="sign-out"
                        onClick={handleLogout}
                        color="red.500"
                        disabled={isLoggingOut}
                    >
                        <HStack gap={2}>
                            {isLoggingOut ? <Spinner size="sm"/> : <FaSignOutAlt/>}
                            <Text>{isLoggingOut ? 'Signing out...' : 'Sign out'}</Text>
                        </HStack>
                    </Menu.Item>
                </Menu.Content>
            </Menu.Positioner>
        </Menu.Root>
    );
}

export default UserProfile;
