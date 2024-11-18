import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
    selector: 'app-timer',
    standalone: true,
    imports: [DecimalPipe],
    templateUrl: './timer.component.html',
    styleUrl: './timer.component.scss',
    animations: [
        trigger('flipAnimation', [
            transition(':increment', [
                animate("0.2s ease-out", style({transform: "translateY(0.5rem)", opacity: 0})),
                style({transform: 'translateY(-1rem)'}),
                animate('0.2s ease-out', style({transform: 'translateY(0)', opacity: 1})),
            ]),
            transition(':decrement', [
                animate("0.2s ease-out", style({transform: "translateY(0.5rem)", opacity: 0})),
                style({transform: 'translateY(-1rem)'}),
                animate('0.2s ease-out', style({transform: 'translateY(0)', opacity: 1})),
            ]),
        ]),
    ]
})
export class TimerComponent implements OnInit, OnDestroy {
    @Input({required: true, alias: 'type'}) timerType: TimerType =
        'Entire-class';
    @Input({required: true}) name = '';
    @Input({required: true}) description = '';
    @Input({required: true, alias: 'time'}) wantedTime = '';

    theTime!: Date;
    currentTime = new Date();
    interval!: ReturnType<typeof setInterval>;
    shouldBeHidden = false;

    msDay = 24 * 60 * 60 * 1000;
    msHour = 60 * 60 * 1000;
    msMinute = 60 * 1000;
    msSecond = 1000;

    technicalTimeValues = {days: 0, hours: 0, minutes: 0, seconds: 0};
    timeValues = {days: 0, hours: 0, minutes: 0, seconds: 0}


    updateTime = () => {
        this.currentTime = new Date();
        const timeDiff = this.theTime.getTime() - this.currentTime.getTime();
        if (timeDiff <= 0) {
            clearInterval(this.interval);
            this.technicalTimeValues = {days: 0, hours: 0, minutes: 0, seconds: 0};
            this.shouldBeHidden = true;
            return;
        }
        this.updateTimeVariables(timeDiff);
    };

    private updateTimeVariables = (timeDiff: number) => {
        this.technicalTimeValues = {
            seconds: Math.floor((timeDiff % this.msMinute) / this.msSecond),
            minutes: Math.floor((timeDiff % this.msHour) / this.msMinute),
            hours: Math.floor((timeDiff % this.msDay) / this.msHour),
            days: Math.floor(timeDiff / this.msDay),
        }
        setTimeout(() => {
            this.timeValues = {
                seconds: Math.floor((timeDiff % this.msMinute) / this.msSecond),
                minutes: Math.floor((timeDiff % this.msHour) / this.msMinute),
                hours: Math.floor((timeDiff % this.msDay) / this.msHour),
                days: Math.floor(timeDiff / this.msDay),
            }
        }, 200)
    }

    ngOnInit(): void {
        this.theTime = new Date(this.wantedTime);
        const timeDiff = this.theTime.getTime() - this.currentTime.getTime();
        if (timeDiff <= 0) {
            this.shouldBeHidden = true;
            this.timeValues = {days: 0, hours: 0, minutes: 0, seconds: 0};
        } else {
            this.currentTime = new Date();
            setTimeout(() => this.updateTimeVariables(timeDiff), 100)
            this.interval = setInterval(this.updateTime, 1000);
        }
    }

    ngOnDestroy(): void {
        clearInterval(this.interval);
    }
}

type TimerType =
    | 'Entire-class'
    | 'S1'
    | 'S2'
    | 'French'
    | 'German'
    | 'Positive';
