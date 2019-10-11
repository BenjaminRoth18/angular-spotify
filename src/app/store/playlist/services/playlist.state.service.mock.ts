import { of } from 'rxjs';
import { trackMock } from 'src/app/models/track.mock';

export class MockPlaylistStateService {
    getPlaylist = jest.fn().mockReturnValue(of([trackMock]));
}
