import { createAction, props } from '@ngrx/store';
import { Track } from 'src/app/models/track.model';

export const fetchPlaylist = createAction('[Playlist] Fetch playlist');
export const fetchPlaylistSuccess = createAction(
    '[Playlist] Fetch playlist success',
    props<{ payload: Track[] }>()
);
