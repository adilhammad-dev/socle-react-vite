import UsersList from 'containers/Users';
import UserProfile from 'components/auth/UserProfile';
import {
    ContentCard,
    HeaderActions,
    PageContainer,
    PageHeader,
    PageSubtitle,
    PageTitle,
    PageWrapper
} from './UsersPage.styled';

export const UsersPage = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <PageHeader>
                    <HeaderActions>
                        <UserProfile/>
                    </HeaderActions>
                    <PageTitle>Users Administration</PageTitle>
                    <PageSubtitle>
                        View and manage all users of the application
                    </PageSubtitle>
                </PageHeader>

                <ContentCard>
                    <UsersList/>
                </ContentCard>
            </PageContainer>
        </PageWrapper>
    );
};

export default UsersPage;

