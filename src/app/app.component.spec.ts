import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MockHeaderComponent } from './components/header.component.mock';
import { AuthStateService } from './store/auth/services/auth.state.service';

import { MockAuthService } from './store/auth/services/auth.state.service.mock';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                {
                    provide: AuthStateService,
                    useClass: MockAuthService
                }
            ],
            imports: [RouterTestingModule],
            declarations: [AppComponent, MockHeaderComponent]
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
