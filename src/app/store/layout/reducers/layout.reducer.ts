import { Action, createReducer, on } from '@ngrx/store';

import * as fromLayoutActions from '../actions/layout.actions';

export interface State {
    loading: number;
}

export const initialState: State = {
    loading: 0
};

const layoutReducer = createReducer(
    initialState,
    on(fromLayoutActions.addLoading, (state: State) => {
        return {
            ...state,
            loading: state.loading + 1
        };
    }),
    on(fromLayoutActions.removeLoading, (state: State) => {
        return {
            ...state,
            loading: state.loading - 1
        };
    })
);

export function reducer(state: State, action: Action) {
    return layoutReducer(state, action);
}
