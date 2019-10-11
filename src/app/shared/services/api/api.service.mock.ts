import { of } from 'rxjs';

import { ApiService } from './api.service';

export class MockApiService extends ApiService {
    auth = jest.fn().mockReturnValue(of({ acces_token: 'foo' }));
    getPlaylist = jest.fn();

    constructor(public httpMock: any) {
        super({} as any, {} as any);
    }
}
