import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';
import { PlaylistDto } from 'src/app/models/track.model';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { SpotifyService } from 'src/app/shared/services/spotify/spotify.service';

import { fetchPlaylist } from '../actions/playlist.actions';
import * as fromPlaylistActions from '../actions/playlist.actions';

@Injectable()
export class PlaylistEffects {
    fetchPlaylist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fetchPlaylist.type),
            mergeMap(() => {
                const playlistId = '57NArvaO11CP8LybwIF9gt';
                return this.apiService.getPlaylist(playlistId).pipe(
                    switchMap((response: PlaylistDto) => {
                        this.router.navigate(['playlist']);
                        const playlist = this.spotifyService.createPlaylist(
                            response
                        );
                        return of(
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
        private spotifyService: SpotifyService,
        private router: Router
    ) {}
}
