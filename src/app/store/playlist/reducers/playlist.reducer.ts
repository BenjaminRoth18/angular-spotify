import { Action, createReducer, on } from '@ngrx/store';
import { Track } from 'src/app/models/track.model';

import * as fromPlaylistActions from '../actions/playlist.actions';

export interface State {
    tracks: Track[];
}

export const initialState: State = {
    tracks: []
};

const playlistReducer = createReducer(
    initialState,
    on(
        fromPlaylistActions.fetchPlaylistSuccess,
        (state: State, { payload }) => {
            return {
                ...state,
                tracks: payload
            };
        }
    )
);

export function reducer(state: State, action: Action) {
    return playlistReducer(state, action);
}
