import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Track } from 'src/app/shared/models/track/track.model';
import { LayoutStateService } from 'src/app/store/layout/services/layout.state.service';
import { PlaylistStateService } from 'src/app/store/playlist/services/playlist.state.service';

@Component({
    selector: 'sp-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit, OnDestroy {
    playlist: Track[];
    subscriptions = new Subscription();
    loadingCount: number;

    constructor(
        private playlistStateService: PlaylistStateService,
        private layoutStateService: LayoutStateService
    ) {}

    ngOnInit(): void {
        this.subscriptions.add(
            this.playlistStateService
                .getPlaylist()
                .subscribe((playlist: Track[]) => {
                    this.playlist = playlist;
                })
        );

        this.subscriptions.add(
            this.layoutStateService
                .getLoadingCount()
                .subscribe((loadingCount: number) => {
                    this.loadingCount = loadingCount;
                })
        );
    }

    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
}
