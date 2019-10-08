import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

import * as fromPlaylistActions from '../../playlist/actions/playlist.actions';
import { getToken } from '../actions/login.actions';
import * as fromLoginActions from '../actions/login.actions';

@Injectable()
export class LoginEffects {
    getToken$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getToken.type),
            mergeMap(() => {
                return this.apiService.login().pipe(
                    switchMap((response: any) => {
                        [this.storageService.saveToken(response.access_token)];
                        return of(
                            fromLoginActions.getTokenSuccess({
                                payload: response.access_token
                            }),
                            fromPlaylistActions.fetchPlaylist()
                        );
                    })
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private storageService: StorageService
    ) {}
}
