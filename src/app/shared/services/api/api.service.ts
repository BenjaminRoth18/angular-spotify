import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SpotifyService } from '../spotify/spotify.service';

@Injectable()
export class ApiService {
    constructor(
        private http: HttpClient,
        private spotifyService: SpotifyService
    ) {}

    login(): Observable<{}> {
        return this.http.post(
            this.spotifyService.tokenEndpoint,
            this.spotifyService.tokenParams,
            this.spotifyService.createTokenHeaders()
        );
    }

    getPlaylist(id: string): Observable<{}> {
        return this.http.get(
            `${this.spotifyService.playlistEndpoint}/${id}`,
            this.spotifyService.createAuthHeaders()
        );
    }
}
