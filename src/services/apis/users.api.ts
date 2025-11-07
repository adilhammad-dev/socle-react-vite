import type {TSimpleUser} from 'types/users.type';
import {api} from '.';

const UserBaseUrl = '/app-users';

export const userApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<TSimpleUser[], void>({
            query: () => ({
                url: '/app-users/filter',
                method: 'POST',
            }),
        }),
    }),
});

export const {useGetUsersQuery} = userApi;