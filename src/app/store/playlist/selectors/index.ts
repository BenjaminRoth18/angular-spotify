import { createSelector } from '@ngrx/store';

import * as fromPlaylistReducers from '../reducers/playlist.reducers';

export interface PlaylistAppState {
    playlist: fromPlaylistReducers.State;
}

export const selectPlaylist = (state: PlaylistAppState) => state.playlist;

export const selectPlaylistTracks = createSelector(
    selectPlaylist,
    (state: fromPlaylistReducers.State) => state.tracks
);
