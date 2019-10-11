import * as fromSelectors from '.';
import { trackMock } from '../../../shared/models/track/track.mock';

describe('PlaylistSelectors', () => {
    it('should create selectPlaylistTracks selector', () => {
        expect(
            fromSelectors.selectPlaylistTracks.projector({
                tracks: [trackMock]
            })
        ).toEqual([trackMock]);
    });
});
