import {createSelector} from 'reselect';
import {selectGlobalDomain} from 'services/slices/global';
import type {TSimpleUser} from "types/users.type.ts";

const makeSelectConnectedUser = createSelector(
    selectGlobalDomain,
    (subState): TSimpleUser => subState.connectedUser,
);


export {
    makeSelectConnectedUser,
};
