import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlaylistDto, PlaylistItemDto, Track } from 'src/app/models/track.model';

import { StorageService } from '../storage/storage.service';

@Injectable()
export class SpotifyService {
    tokenEndpoint = '/api/token';
    tokenParams = 'grant_type=client_credentials';
    playlistEndpoint = '/playlists';

    constructor(private storageService: StorageService) {}

    createTokenHeaders() {
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization:
                    'Basic OTk2MDgwOTM3ZWJiNDU5NGEwOTc5MTQ2YzljMGMxMjE6MGJkYTNjZmQyMTNjNDYyMmJjNmM1NjI1ODY1NjhlYzg='
            })
        };

        return headerOptions;
    }

    createAuthHeaders() {
        const token = this.storageService.getToken();

        const headerOptions = {
            headers: new HttpHeaders({
                Authorization: `Bearer ${token}`
            })
        };

        return headerOptions;
    }

    createPlaylist(playlistData: PlaylistDto): Track[] {
        const tracks = playlistData.tracks.items;

        return tracks.reduce((list: Track[], item: PlaylistItemDto) => {
            const trackItem = {} as Track;
            trackItem['artist'] = item.track.artists[0].name;
            trackItem['track'] = item.track.name;
            trackItem['imageUrl'] = item.track.album.images[0].url;
            list.push(trackItem);
            return list;
        }, []);
    }
}
