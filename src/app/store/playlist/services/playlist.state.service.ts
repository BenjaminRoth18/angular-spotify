import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models/track.model';

import * as fromPlaylist from '../selectors';

@Injectable()
export class PlaylistStateService {
    constructor(private store: Store<fromPlaylist.PlaylistAppState>) {}

    getPlaylist(): Observable<Track[]> {
        return this.store.pipe(select(fromPlaylist.selectPlaylistFeatureState));
    }
}
