import {useGetUsersQuery} from 'services/apis/users.api.ts';
import {
    Container,
    ErrorMessage,
    Header,
    Message,
    RefreshButton,
    Title,
    UserCard,
    UserEmail,
    UserGrid,
    UserName
} from './UsersList.styled.ts';

export const Index = () => {
    const {data, isLoading, error, refetch, isFetching} = useGetUsersQuery();

    // Safely extract users array from data
    const users = Array.isArray(data) ? data : [];

    if (isLoading) {
        return <Message>Chargement...</Message>;
    }

    if (error) {
        return (
            <Container>
                <ErrorMessage>Erreur lors du chargement</ErrorMessage>
                <RefreshButton onClick={() => refetch()}>Réessayer</RefreshButton>
            </Container>
        );
    }

    if (users.length === 0) {
        return <Message>Aucun utilisateur</Message>;
    }

    return (
        <Container>
            <Header>
                <Title>Utilisateurs</Title>
                <RefreshButton onClick={() => refetch()} disabled={isFetching}>
                    Refresh
                </RefreshButton>
            </Header>

            <UserGrid>
                {users.map(user => (
                    <UserCard key={user.appUserId}>
                        <UserName>{user.fullName}</UserName>
                        <UserEmail>{user.mail}</UserEmail>
                    </UserCard>
                ))}
            </UserGrid>
        </Container>
    );
};

export default Index;
