import { ActionReducerMap } from '@ngrx/store';

import * as fromAuthReducers from './auth/reducers/auth.reducers';
import * as fromLayoutReducers from './layout/reducers/layout.reducer';
import * as fromPlaylistReducers from './playlist/reducers/playlist.reducers';

export interface AppState {
    auth: fromAuthReducers.State;
    playlist: fromPlaylistReducers.State;
    layout: fromLayoutReducers.State;
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: fromAuthReducers.reducer,
    playlist: fromPlaylistReducers.reducer,
    layout: fromLayoutReducers.reducer
};
