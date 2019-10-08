import * as fromLoginReducers from './login/reducers/login.reducer';
import * as fromPlaylistReducers from './playlist/reducers/playlist.reducer';

export const appReducers = {
    login: fromLoginReducers.reducer,
    playlist: fromPlaylistReducers.reducer
};
