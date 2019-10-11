import { SpotifyService } from './spotify.service';

export class MockSpotifyService extends SpotifyService {
    tokenEndpoint = 'tokenEndpoint';
    tokenParams = 'tokenParams';
    playlistEndpoint = 'playlistEndpoint';
    createTokenHeaders = jest.fn().mockReturnValue('tokenHeaders');
    createAuthHeaders = jest.fn().mockReturnValue('authHeaders');
    createPlaylist = jest.fn();

    constructor() {
        super({} as any);
    }
}
