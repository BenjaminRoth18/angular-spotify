import { trackMock } from '../../../shared/models/track/track.mock';
import * as fromPlaylistActions from './playlist.actions';

describe('PlaylistActions', () => {
    it('should create fetchPlaylist action', () => {
        expect(fromPlaylistActions.fetchPlaylist()).toEqual({
            type: fromPlaylistActions.PlaylistActionTypes.FETCH_PLAYLIST
        });
    });

    it('should create fetchPlaylistSuccess action', () => {
        expect(
            fromPlaylistActions.fetchPlaylistSuccess({
                payload: [trackMock]
            })
        ).toEqual({
            type:
                fromPlaylistActions.PlaylistActionTypes.FETCH_PLAYLIST_SUCCESS,
            payload: [trackMock]
        });
    });
});
