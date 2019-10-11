import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { PlaylistDto } from 'src/app/shared/models/track/track.model';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { SpotifyService } from 'src/app/shared/services/spotify/spotify.service';

import * as fromLayoutActions from '../../layout/actions/layout.actions';
import * as fromPlaylistActions from '../actions/playlist.actions';
import { fetchPlaylist } from '../actions/playlist.actions';

@Injectable()
export class PlaylistEffects {
    fetchPlaylist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchPlaylist.type),
            mergeMap(() => {
                const playlistId = '57NArvaO11CP8LybwIF9gt';
                return this.apiService.getPlaylist(playlistId).pipe(
                    switchMap((response: PlaylistDto) => {
                        const playlist = this.spotifyService.createPlaylist(
                            response
                        );
                        return of(
                            fromLayoutActions.removeLoading(),
                            fromPlaylistActions.fetchPlaylistSuccess({
                                payload: playlist
                            })
                        );
                    })
                );
            })
        )
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private spotifyService: SpotifyService
    ) {}
}
