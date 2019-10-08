import { Action, createReducer, on } from '@ngrx/store';

import * as fromLoginActions from '../actions/login.actions';

export interface State {
    token: string;
}

export const initialState: State = {
    token: ''
};

const loginReducer = createReducer(
    initialState,
    on(fromLoginActions.getTokenSuccess, (state: State, { payload }) => {
        return {
            ...state,
            token: payload.token
        };
    })
);

export function reducer(state: State, action: Action) {
    return loginReducer(state, action);
}
