import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Track } from 'src/app/models/track.model';
import { PlaylistStateService } from 'src/app/store/playlist/services/playlist.state.service';

@Component({
    selector: 'sp-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, OnDestroy {
    playlist: Track[];
    subscriptions = new Subscription();

    constructor(private playlistStateService: PlaylistStateService) {}

    ngOnInit(): void {
        this.subscriptions.add(
            this.playlistStateService
                .getPlaylist()
                .subscribe((playlist: Track[]) => {
                    this.playlist = playlist;
                })
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
