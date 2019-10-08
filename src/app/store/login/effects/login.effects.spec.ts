import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MockApiService } from 'src/app/shared/services/api/api.service.mock';
import { SpotifyService } from 'src/app/shared/services/spotify/spotify.service';
import { MockSpotifyService } from 'src/app/shared/services/spotify/spotify.service.mock';
import { StorageService } from 'src/app/shared/services/storage/storage.service';
import { MockStorageService } from 'src/app/shared/services/storage/storage.service.mock';

import * as fromLoginActions from '../actions/login.actions';
import { LoginEffects } from './login.effects';

describe('LoginEffects', () => {
    let loginEffects: LoginEffects;
    let actions: Observable<Action>;
    let storageService: StorageService;
    let spotifyService: SpotifyService;
    let apiService: ApiService;
    let router: Router;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: StorageService,
                    useClass: MockStorageService
                },
                { provide: SpotifyService, useClass: MockSpotifyService },
                {
                    provide: ApiService,
                    useClass: MockApiService
                }
            ]
        });

        router = {
            navigate: jest.fn()
        } as any;

        storageService = new StorageService();
        spotifyService = new SpotifyService(storageService);
        apiService = new ApiService('http' as any, 'spotifyService' as any);
    });

    it('should handle getToken action', done => {
        actions = of({
            type: fromLoginActions.getToken.type
        });

        loginEffects = new LoginEffects(
            actions,
            apiService,
            router,
            storageService
        );

        storageService.saveToken = jest.fn();
        apiService.login = jest
            .fn()
            .mockReturnValue(of({ access_token: 'foo' }));

        loginEffects.getToken$.subscribe(result => {
            expect(router.navigate).toHaveBeenCalledWith(['playlist']);
            expect(storageService.saveToken).toHaveBeenCalledWith('foo');
            expect(result).toEqual({
                type: fromLoginActions.getTokenSuccess.type,
                token: 'foo'
            });
            done();
        });
    });
});
