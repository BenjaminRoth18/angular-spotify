import { createSelector } from '@ngrx/store';

import * as fromLayoutReducers from '../reducers/layout.reducer';

export interface LayoutAppState {
    layout: fromLayoutReducers.State;
}

export const selectLayout = (state: LayoutAppState) => state.layout;

export const selectLayoutLoading = createSelector(
    selectLayout,
    (state: fromLayoutReducers.State) => state.loading
);
