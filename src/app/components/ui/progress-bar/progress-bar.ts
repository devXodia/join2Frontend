import { Component, input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  styleUrl: './progress-bar.scss',
})
export class ProgressBar {
  total = input<number>(0);
  done = input<number>(0);

  trackColor = '#eeeeee';
  fillColor = 'rgba(69, 137, 255, 1)';

  get clampedDone(): number {
    return Math.max(0, Math.min(this.done(), this.total()));
  }

  get percent(): number {
    return this.total() > 0 ? (this.clampedDone / this.total()) * 100 : 0;
  }
}
