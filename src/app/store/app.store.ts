import { ActionReducerMap } from '@ngrx/store';

import * as fromLoginReducers from './login/reducers/login.reducer';
import * as fromLogin from './login/selectors';
import * as fromPlaylistReducers from './playlist/reducers/playlist.reducer';
import * as fromPlaylist from './playlist/selectors';

export interface AppState {
    login: fromLogin.LoginState;
    playlist: fromPlaylist.PlaylistState;
}

export const appReducers: ActionReducerMap<AppState> = {
    login: fromLoginReducers.reducer,
    playlist: fromPlaylistReducers.reducer
};
