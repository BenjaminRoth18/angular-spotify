import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MockLoaderComponent } from 'src/app/shared/components/loader/loader.component.mock';
import { trackMock } from 'src/app/shared/models/track/track.mock';
import { LayoutStateService } from 'src/app/store/layout/services/layout.state.service';
import { MockLayoutStateService } from 'src/app/store/layout/services/layout.state.service.mock';
import { PlaylistStateService } from 'src/app/store/playlist/services/playlist.state.service';
import { MockPlaylistStateService } from 'src/app/store/playlist/services/playlist.state.service.mock';

import { PlaylistComponent } from './playlist.component';

describe('PlaylistComponent', () => {
    let component: PlaylistComponent;
    let fixture: ComponentFixture<PlaylistComponent>;
    let playlistStateService: PlaylistStateService;
    let layoutStateService: LayoutStateService;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: PlaylistStateService,
                    useClass: MockPlaylistStateService
                },
                {
                    provide: LayoutStateService,
                    useClass: MockLayoutStateService
                }
            ],
            declarations: [PlaylistComponent, MockLoaderComponent]
        });

        fixture = TestBed.createComponent(PlaylistComponent);
        component = fixture.debugElement.componentInstance;
        playlistStateService = fixture.debugElement.injector.get(
            PlaylistStateService
        );
        layoutStateService = fixture.debugElement.injector.get(
            LayoutStateService
        );
    }));

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    it('should handle ngOnInit subscriptions', () => {
        playlistStateService.getPlaylist = jest
            .fn()
            .mockReturnValue(of([trackMock]));
        layoutStateService.getLoadingCount = jest.fn().mockReturnValue(of(1));
        component.ngOnInit();

        expect(component.playlist).toEqual([trackMock]);
        expect(component.loadingCount).toEqual(1);
    });

    describe('snaphots', () => {
        it('should create snapshot', () => {
            expect(fixture).toMatchSnapshot();
        });
    });
});
