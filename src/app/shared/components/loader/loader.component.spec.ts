import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
    let component: LoaderComponent;
    let fixture: ComponentFixture<LoaderComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({ declarations: [LoaderComponent] });

        fixture = TestBed.createComponent(LoaderComponent);
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
