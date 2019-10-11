import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { StorageService } from 'src/app/shared/services/storage/storage.service';

import * as fromLayoutActions from '../../layout/actions/layout.actions';
import * as fromPlaylistActions from '../../playlist/actions/playlist.actions';
import * as fromAuthActions from '../actions/auth.actions';
import { getToken } from '../actions/auth.actions';

@Injectable()
export class AuthEffects {
    getToken$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getToken.type),
            mergeMap(() => {
                return this.apiService.auth().pipe(
                    switchMap((response: any) => {
                        this.storageService.saveToken(response.access_token);
                        this.router.navigate(['playlist']);
                        return of(
                            fromAuthActions.getTokenSuccess({
                                payload: response.access_token
                            }),
                            fromLayoutActions.addLoading(),
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
        private router: Router,
        private storageService: StorageService
    ) {}
}
