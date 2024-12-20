import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TimerComponent} from './timer.component';

describe('TimerComponent', () => {
    let component: TimerComponent;
    let fixture: ComponentFixture<TimerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [TimerComponent, NoopAnimationsModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(TimerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have label p', () => {
        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.getElementsByClassName("label")).toBeTruthy()
    });
});
