import {useIsAuthenticated, useMsal} from '@azure/msal-react';
import {Button} from 'components/ui';
import styled from 'styled-components';
import type {Theme} from '@mui/material/styles';

const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const UserAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: ${({theme}: { theme: Theme }) => theme.palette.primary.main};
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 1rem;
`;

const UserDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
`;

const UserName = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({theme}: { theme: Theme }) => theme.palette.text.primary};
`;

const UserEmail = styled.span`
    font-family: 'Inter', sans-serif;
    font-size: 0.75rem;
    color: ${({theme}: { theme: Theme }) => theme.palette.text.secondary};
`;

const LogoutButton = styled(Button)`
    margin-left: 1rem;
`;

/**
 * User Profile Component
 *
 * Displays user information and logout button
 */
export function UserProfile() {
    const isAuthenticated = useIsAuthenticated();
    const {instance, accounts} = useMsal();
    const user = accounts[0];

    if (!isAuthenticated || !user) {
        return null;
    }

    const handleLogout = async () => {
        try {
            await instance.logoutPopup({
                mainWindowRedirectUri: '/',
            });
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    // Get user initials for avatar
    const getInitials = (name?: string) => {
        if (!name) return '?';
        const parts = name.split(' ');
        if (parts.length >= 2) {
            return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
        }
        return name.substring(0, 2).toUpperCase();
    };

    return (
        <UserInfoContainer>
            <UserAvatar>{getInitials(user.name)}</UserAvatar>
            <UserDetails>
                <UserName>{user.name || 'User'}</UserName>
                <UserEmail>{user.username}</UserEmail>
            </UserDetails>
            <LogoutButton variant="secondary" size="small" onClick={handleLogout}>
                Logout
            </LogoutButton>
        </UserInfoContainer>
    );
}

export default UserProfile;

