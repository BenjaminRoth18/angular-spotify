import { PlaylistDto, PlaylistItemDto, PlaylistTrackDto, Track } from './track.model';

export const trackMock: Track = {
    artist: 'artist name',
    track: 'track name',
    imageUrl: 'image url'
};

export const playlistDtoTrackMock: PlaylistTrackDto = {
    album: {
        images: [
            {
                url: 'image url'
            }
        ]
    },
    artists: [{ name: 'artist name' }],
    name: 'track name'
};

export const playlistDtoItemMock: PlaylistItemDto = {
    track: playlistDtoTrackMock
};

export const playlistDtoMock: PlaylistDto = {
    tracks: {
        items: [playlistDtoItemMock]
    }
};
