import {useGetUsersQuery} from 'services/apis/users.api';
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
} from './UsersList.styled';

export const UsersList = () => {
    const {data: users, isLoading, error, refetch, isFetching} = useGetUsersQuery();

    if (isLoading) {
        return <Message>Chargement...</Message>;
    }

    if (error) {
        const errorStatus = (error as any)?.status;
        const errorData = (error as any)?.data;

        let errorMessage = 'Erreur lors du chargement';

        if (errorStatus === 404) {
            errorMessage = 'Erreur 404 : Endpoint non trouvé - Vérifiez l\'URL de l\'API';
        } else if (errorStatus === 500) {
            errorMessage = 'Erreur 500 : Erreur serveur - Veuillez réessayer plus tard';
        } else if (errorStatus === 401) {
            errorMessage = 'Erreur 401 : Non autorisé - Token manquant ou invalide';
        } else if (errorStatus === 403) {
            errorMessage = 'Erreur 403 : Accès interdit - Permissions insuffisantes';
        } else if (errorStatus) {
            errorMessage = `Erreur ${errorStatus} : ${errorData?.message || 'Erreur inconnue'}`;
        }

        console.error('API Error:', {status: errorStatus, data: errorData});

        return (
            <Container>
                <ErrorMessage>{errorMessage}</ErrorMessage>
                <RefreshButton onClick={() => refetch()}>Réessayer</RefreshButton>
            </Container>
        );
    }

    if (!users || users.length === 0) {
        return <Message>Aucun utilisateur</Message>;
    }

    return (
        <Container>
            <Header>
                <Title>Utilisateurs</Title>
                <RefreshButton onClick={() => refetch()} disabled={isFetching}>
                    Actualiser
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

export default UsersList;

