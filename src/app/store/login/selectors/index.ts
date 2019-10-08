import { createSelector } from '@ngrx/store';

import * as fromLoginReducers from '../reducers/login.reducer';

export interface LoginAppState {
    login: LoginState;
}

export type LoginState = fromLoginReducers.State;

export const selectLogin = (state: LoginAppState) => state.login;

export const selectLoginToken = createSelector(
    selectLogin,
    (state: fromLoginReducers.State) => state.token
);
