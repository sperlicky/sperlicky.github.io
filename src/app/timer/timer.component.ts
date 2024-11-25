import { Component, OnInit, OnDestroy, input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { DateTime, Duration } from 'luxon';
import { animate, style, transition, trigger } from '@angular/animations';

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
  timerType = input<TimerType>('Entire-class', { alias: 'type' });
  name = input('');
  description = input('');
  wantedTime = input<string>('2024-11-20', { alias: 'time' });

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
    this.theTime = DateTime.fromISO(String(this.wantedTime()), {
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

type TimerType =
  | 'Entire-class'
  | 'S1'
  | 'S2'
  | 'French'
  | 'German'
  | 'Positive';
