import { of } from 'rxjs';

export class MockApiService {
    login = jest.fn().mockReturnValue(of({ acces_token: 'foo' }));
    getPlaylist = jest.fn();
}
