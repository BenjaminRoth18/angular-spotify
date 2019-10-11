import { trackMock } from 'src/app/models/track.mock';

import * as fromPlaylistActions from '../actions/playlist.actions';
import * as fromPlaylistReducer from './playlist.reducers';

describe('playlistReducer', () => {
    it('should handle fetchPlaylistSuccess action', () => {
        expect(
            fromPlaylistReducer.reducer(
                { tracks: [] },
                fromPlaylistActions.fetchPlaylistSuccess({
                    payload: [trackMock]
                })
            )
        ).toEqual({ tracks: [trackMock] });
    });
});
