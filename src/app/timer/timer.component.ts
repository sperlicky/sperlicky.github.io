import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DateTime, Duration } from 'luxon';
import { animate, style, transition, trigger } from '@angular/animations';

type TimerType =
  | 'Entire-class'
  | 'S1'
  | 'S2'
  | 'French'
  | 'German'
  | 'Positive';

@Component({
  selector: 'app-timer',
  imports: [DecimalPipe],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
  animations: [
    trigger('flipAnimation', [
      transition(':increment', [
        animate(
          '0.2s ease-out',
          style({ transform: 'translateY(0.5em)', opacity: 0 }),
        ),
        style({ transform: 'translateY(-1em)' }),
        animate(
          '0.2s ease-out',
          style({ transform: 'translateY(0)', opacity: 1 }),
        ),
      ]),
      transition(':decrement', [
        animate(
          '0.2s ease-out',
          style({ transform: 'translateY(0.5em)', opacity: 0 }),
        ),
        style({ transform: 'translateY(-1em)' }),
        animate(
          '0.2s ease-out',
          style({ transform: 'translateY(0)', opacity: 1 }),
        ),
      ]),
    ]),
  ],
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input({ required: true, alias: 'type' }) timer!: TimerType;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) description!: string;
  @Input({ required: true, alias: 'time' }) wantedTime: string = '2024-11-02';
  theTime!: DateTime;
  currentTime = DateTime.now().setZone('Europe/Prague');
  interval!: ReturnType<typeof setInterval>;
  shouldBeHidden = false;

  technicalTimeValues = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  timeValues = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  updateTime = () => {
    this.currentTime = DateTime.now().setZone('Europe/Prague');
    console.log(this.currentTime);
    const eventIn = Duration.fromMillis(
      this.theTime.toMillis() - this.currentTime.toMillis(),
    );
    if (eventIn.as('millisecond') <= 0) {
      clearInterval(this.interval);
      this.technicalTimeValues = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      this.shouldBeHidden = true;
      return;
    }
    this.updateTimeVariables(eventIn);
  };

  private updateTimeVariables = (timeDiff: Duration) => {
    const technicalTimeDiff = timeDiff
      .shiftTo('days', 'hours', 'minutes', 'seconds')
      .toObject();
    this.technicalTimeValues = {
      seconds: technicalTimeDiff.seconds || 0,
      minutes: technicalTimeDiff.minutes || 0,
      hours: technicalTimeDiff.hours || 0,
      days: technicalTimeDiff.days || 0,
    };
    setTimeout(() => {
      this.timeValues = {
        seconds: technicalTimeDiff.seconds || 0,
        minutes: technicalTimeDiff.minutes || 0,
        hours: technicalTimeDiff.hours || 0,
        days: technicalTimeDiff.days || 0,
      };
    }, 200);
  };

  ngOnInit(): void {
    if (!this.wantedTime || !DateTime.fromISO(this.wantedTime).isValid) {
      throw new Error(
        `Invalid or missing wantedTime input. Ensure it is an ISO 8601 string. wamtedTime is ${this.wantedTime}`,
      );
    }
    this.theTime = DateTime.fromISO(this.wantedTime, {
      zone: 'Europe/Prague',
    });
    const eventIn = Duration.fromMillis(
      this.theTime.toMillis() - this.currentTime.toMillis(),
    );
    if (eventIn.as('milliseconds') <= 0) {
      this.shouldBeHidden = true;
      this.timeValues = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    } else {
      this.currentTime = DateTime.now().setZone('Europe/Prague');
      setTimeout(() => this.updateTimeVariables(eventIn), 100);
      this.interval = setInterval(this.updateTime, 1000);
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
