import { playlistDtoMock } from 'src/app/models/track.mock';

import { MockStorageService } from '../storage/storage.service.mock';
import { SpotifyService } from './spotify.service';

describe('SpotifyService', () => {
    let spotifyService: SpotifyService;
    let storageService: MockStorageService;

    beforeEach(() => {
        storageService = new MockStorageService();
        spotifyService = new SpotifyService(storageService);
    });

    it('should create token headers', () => {
        const headers = spotifyService.createTokenHeaders();
        expect(headers.headers.get('Content-Type')).toEqual(
            'application/x-www-form-urlencoded'
        );
        expect(headers.headers.get('Authorization')).toEqual(
            'Basic OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg='
        );
    });

    it('should create auth headers', () => {
        storageService.getToken = jest.fn().mockReturnValue('token');

        const headers = spotifyService.createAuthHeaders();

        expect(headers.headers.get('Authorization')).toEqual('Bearer token');
    });

    it('should create playlist snapshot', () => {
        expect(
            spotifyService.createPlaylist(playlistDtoMock)
        ).toMatchSnapshot();
    });
});
