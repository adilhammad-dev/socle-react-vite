import UsersList from 'containers/Users';
import {ContentCard, PageContainer, PageHeader, PageSubtitle, PageTitle, PageWrapper} from './UsersPage.styled';

export const UsersPage = () => {
    return (
        <PageWrapper>
            <PageContainer>
                <PageHeader>
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

