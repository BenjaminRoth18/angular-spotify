import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromLoginReducers from '../reducers/login.reducer';

export interface LoginAppState {
    login: LoginState;
}

export type LoginState = fromLoginReducers.State;

export const selectLogin = createFeatureSelector('login');

export const selectLoginState = createSelector(
    selectLogin,
    (state: LoginState) => state
);
