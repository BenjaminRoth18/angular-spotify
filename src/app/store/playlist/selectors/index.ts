import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPlaylistReducers from '../reducers/playlist.reducer';

export interface PlaylistAppState {
    playlist: PlaylistState;
}

export type PlaylistState = fromPlaylistReducers.State;

export const selectPlaylistFeature = createFeatureSelector<
    fromPlaylistReducers.State
>('playlist');

export const selectPlaylistFeatureState = createSelector(
    selectPlaylistFeature,
    (state: PlaylistState) => state.tracks
);
