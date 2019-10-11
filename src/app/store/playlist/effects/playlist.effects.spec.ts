import { Action } from '@ngrx/store';
import { cold } from 'jest-marbles';
import { Observable, of } from 'rxjs';
import { HttpMock } from 'src/app/shared/models/http.mock';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MockApiService } from 'src/app/shared/services/api/api.service.mock';
import { SpotifyService } from 'src/app/shared/services/spotify/spotify.service';
import { MockSpotifyService } from 'src/app/shared/services/spotify/spotify.service.mock';

import { trackMock } from '../../../models/track.mock';
import * as fromLayoutActions from '../../layout/actions/layout.actions';
import * as fromPlaylistActions from '../actions/playlist.actions';
import { PlaylistEffects } from './playlist.effects';

describe('PlaylistEffects', () => {
    let playlistEffects: PlaylistEffects;
    let actions: Observable<Action>;
    let apiService: ApiService;
    let spotifyService: SpotifyService;
    let http: HttpMock;

    beforeEach(() => {
        http = new HttpMock();
        spotifyService = new MockSpotifyService();
        apiService = new MockApiService(http);
    });

    it('should handle fetchPlaylist action', () => {
        const startAction = fromPlaylistActions.fetchPlaylist();
        const endActionRemoveLoading = fromLayoutActions.removeLoading();
        const endActionSuccess = fromPlaylistActions.fetchPlaylistSuccess({
            payload: [trackMock]
        });

        apiService.getPlaylist = jest.fn().mockReturnValue(of(trackMock));
        spotifyService.createPlaylist = jest.fn().mockReturnValue([trackMock]);

        actions = cold('--a', { a: startAction });

        const expected = cold('--(bc)', {
            b: endActionRemoveLoading,
            c: endActionSuccess
        });

        const playlistId = '57NArvaO11CP8LybwIF9gt';

        playlistEffects = new PlaylistEffects(
            actions,
            apiService,
            spotifyService
        );

        expect(expected).toSatisfyOnFlush(() => {
            expect(apiService.getPlaylist).toHaveBeenCalledWith(playlistId);
            expect(spotifyService.createPlaylist).toHaveBeenCalledWith(
                trackMock
            );
        });
        expect(playlistEffects.fetchPlaylist$).toBeObservable(expected);
    });
});
