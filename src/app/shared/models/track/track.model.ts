export interface Track {
    artist: string;
    track: string;
    imageUrl: string;
}

export interface PlaylistDto {
    tracks: {
        items: PlaylistItemDto[];
    };
}

export interface PlaylistItemDto {
    track: PlaylistTrackDto;
}

export interface PlaylistTrackDto {
    album: {
        images: Array<{ url: string }>;
    };
    artists: Array<{ name: string }>;
    name: string;
}
