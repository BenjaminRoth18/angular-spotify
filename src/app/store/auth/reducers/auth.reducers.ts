import { Action, createReducer, on } from '@ngrx/store';

import * as fromAuthActions from '../actions/auth.actions';

export interface State {
    token: string;
}

export const initialState: State = {
    token: ''
};

const authReducer = createReducer(
    initialState,
    on(fromAuthActions.getTokenSuccess, (state: State, { payload }) => {
        return {
            ...state,
            token: payload.token
        };
    })
);

export function reducer(state: State, action: Action) {
    return authReducer(state, action);
}
