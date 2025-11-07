import {createSlice} from '@reduxjs/toolkit';
import type {RootState} from 'services/store';
import type {TSimpleUser} from 'types/users.type';


interface GlobalSliceState {
    connectedUser: TSimpleUser | undefined;
}

export const initialState: GlobalSliceState = {
    connectedUser: undefined,
};

const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setConnectedUser: (
            state,
            {payload: user}: { payload: TSimpleUser | undefined },
        ) => {
            state.connectedUser = user;
        },
    },
});

export const {
    setConnectedUser,
} = globalSlice.actions;

export const selectGlobalDomain = (state: RootState): any => state.global;

export default globalSlice.reducer;
