import { createSelector } from '@ngrx/store';

import * as fromAuthReducers from '../reducers/auth.reducers';

export interface AuthAppState {
    auth: fromAuthReducers.State;
}

export const selectAuth = (state: AuthAppState) => state.auth;

export const selectAuthToken = createSelector(
    selectAuth,
    (state: fromAuthReducers.State) => state.token
);
