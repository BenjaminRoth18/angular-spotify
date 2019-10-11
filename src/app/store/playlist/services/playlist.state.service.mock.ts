import { of } from 'rxjs';
import { trackMock } from 'src/app/shared/models/track/track.mock';

export class MockPlaylistStateService {
    getPlaylist = jest.fn().mockReturnValue(of([trackMock]));
}
