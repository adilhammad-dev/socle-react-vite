import {useState} from 'react';
import {Avatar, Button, HStack, Menu, Spinner, Text, VStack,} from '@chakra-ui/react';
import {FaChevronDown, FaMoon, FaSignOutAlt, FaSun} from 'react-icons/fa';
import {useAuthService, useUserInfo} from 'providers/auth-provider/hooks';
import {useTheme} from "next-themes";

/**
 * User Profile Component
 * Displays user information and logout functionality
 */
export function UserProfile() {
    const userInfo = useUserInfo();
    const {logoutWithPopup} = useAuthService();
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const {theme, setTheme} = useTheme()
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }


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
                    bg={"bg-primary"}
                    border="1px"
                    borderColor={"border-default"}
                    disabled={isLoggingOut}
                >
                    <HStack gap={3}>
                        <Avatar.Root bg="gray.muted" size="sm">
                            <Avatar.Image src="" alt={userInfo.name}/>
                            <Avatar.Fallback color="white">
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
                        onClick={toggleTheme}
                    >
                        <HStack gap={2}>
                            {theme === "light" ? <FaMoon/> : <FaSun/>}
                            <Text>{theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}</Text>
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
