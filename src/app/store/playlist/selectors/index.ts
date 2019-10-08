import { createSelector } from '@ngrx/store';

import * as fromPlaylistReducers from '../reducers/playlist.reducer';

export interface PlaylistAppState {
    playlist: PlaylistState;
}

export type PlaylistState = fromPlaylistReducers.State;

export const selectPlaylist = (state: PlaylistAppState) => state.playlist;

export const selectPlaylistTracks = createSelector(
    selectPlaylist,
    (state: fromPlaylistReducers.State) => state.tracks
);
