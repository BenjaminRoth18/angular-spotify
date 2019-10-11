import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { cold } from 'jest-marbles';
import { Observable, of } from 'rxjs';
import { HttpMock } from 'src/app/shared/models/http/http.mock';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MockApiService } from 'src/app/shared/services/api/api.service.mock';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

import * as fromLayoutActions from '../../layout/actions/layout.actions';
import * as fromPlaylistActions from '../../playlist/actions/playlist.actions';
import * as fromAuthActions from '../actions/auth.actions';
import { AuthEffects } from './auth.effects';

describe('AuthEffects', () => {
    let authEffects: AuthEffects;
    let actions: Observable<Action>;
    let storageService: StorageService;
    let apiService: ApiService;
    let router: Router;
    let http: HttpMock;

    beforeEach(() => {
        http = new HttpMock();

        router = {
            navigate: jest.fn()
        } as any;

        storageService = new StorageService();
        apiService = new MockApiService(http);
    });

    it('should handle getToken action', () => {
        const startAction = fromAuthActions.getToken();
        const EndActionGetTokenSuccess = fromAuthActions.getTokenSuccess({
            payload: 'foo'
        } as any);

        const endActionAddLoading = fromLayoutActions.addLoading();
        const endActionFetchPlaylist = fromPlaylistActions.fetchPlaylist();

        storageService.saveToken = jest.fn();
        apiService.auth = jest
            .fn()
            .mockReturnValue(of({ access_token: 'foo' }));

        actions = cold('--a', { a: startAction });
        const expected = cold('--(bcd)', {
            b: EndActionGetTokenSuccess,
            c: endActionAddLoading,
            d: endActionFetchPlaylist
        });

        authEffects = new AuthEffects(
            actions,
            apiService,
            router,
            storageService
        );

        expect(expected).toSatisfyOnFlush(() => {
            expect(storageService.saveToken).toHaveBeenCalledWith('foo');
            expect(router.navigate).toHaveBeenCalledWith(['playlist']);
        });
        expect(authEffects.getToken$).toBeObservable(expected);
    });
});
