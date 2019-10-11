import { HttpMock } from '../../models/http.mock';
import { MockSpotifyService } from '../spotify/spotify.service.mock';
import { ApiService } from './api.service';

describe('ApiService', () => {
    let apiService: ApiService;
    let http: HttpMock;
    let spotifyService: MockSpotifyService;

    beforeEach(() => {
        http = new HttpMock();
        spotifyService = new MockSpotifyService();
        apiService = new ApiService(http as any, spotifyService);
    });

    it('should call for auth', () => {
        apiService.auth();
        expect(http.post).toHaveBeenCalledWith(
            'tokenEndpoint',
            'tokenParams',
            'tokenHeaders'
        );
    });

    it('should call for getPlayist', () => {
        apiService.getPlaylist('foo');
        expect(http.get).toHaveBeenCalledWith(
            'playlistEndpoint/foo',
            'authHeaders'
        );
    });
});
