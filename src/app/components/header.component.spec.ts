import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [HeaderComponent] });

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.debugElement.componentInstance;
    }));

    it('should create component', () => {
        expect(component).toBeTruthy();
    });

    describe('snaphots', () => {
        it('should create snapshot', () => {
            expect(fixture).toMatchSnapshot();
        });
    });
});
