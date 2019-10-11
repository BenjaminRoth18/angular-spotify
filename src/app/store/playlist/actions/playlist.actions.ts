import { createAction, props } from '@ngrx/store';
import { Track } from 'src/app/models/track.model';

export enum PlaylistActionTypes {
    FETCH_PLAYLIST = '[Playlist] Fetch playlist',
    FETCH_PLAYLIST_SUCCESS = '[Playlist] Fetch playlist success'
}

export const fetchPlaylist = createAction(PlaylistActionTypes.FETCH_PLAYLIST);
export const fetchPlaylistSuccess = createAction(
    PlaylistActionTypes.FETCH_PLAYLIST_SUCCESS,
    props<{ payload: Track[] }>()
);
