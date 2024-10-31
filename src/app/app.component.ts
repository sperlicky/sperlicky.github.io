import { Component } from '@angular/core';
import { TimerComponent } from './timer/timer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Sperlicky';
}
