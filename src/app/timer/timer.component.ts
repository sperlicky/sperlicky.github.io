import { Component, Input, signal, WritableSignal } from '@angular/core';
import { Tween, Easing } from '@tweenjs/tween.js';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss',
})
export class TimerComponent {
  @Input({ required: true, alias: 'type' }) timerType: TimerType =
    'Entire-class';
  @Input({ required: true }) name = '';
  @Input({ required: true }) description = '';
  @Input({ required: true, alias: 'time' }) wantedTime = '';

  theTime = new Date(this.wantedTime);
  currentTime: WritableSignal<Date> = signal(new Date());
  interval!: ReturnType<typeof setInterval>;

  msDay = 24 * 60 * 60 * 1000;
  msHour = 60 * 60 * 1000;
  msMinute = 60 * 1000;
  msSecond = 1000;

  time = new Tween({ days: 0, hours: 0, minutes: 0, secons: 0 })
    .easing(Easing.Cubic.Out)
    .start();

  updateTime = () => {
    this.currentTime.set(new Date());
    const timeDiff = this.theTime.getTime() - this.currentTime().getTime();

    if (timeDiff <= 0) {
      clearInterval(this.interval);
      this.time.to({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    this.time.to({
      days: Math.floor(timeDiff / this.msDay),
      hours: Math.floor((timeDiff % this.msDay) / this.msHour),
      minutes: Math.floor((timeDiff % this.msHour) / this.msMinute),
      seconds: Math.floor((timeDiff % this.msMinute) / this.msSecond),
    });
  };
  ngOnInit(): void {
    this.interval = setInterval(this.updateTime, 1000);
  }
}

type TimerType =
  | 'Entire-class'
  | 'S1'
  | 'S2'
  | 'French'
  | 'German'
  | 'Positive';
