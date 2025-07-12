import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'big-widget-card',
  imports: [DatePipe],
  templateUrl: './big-widget-card.html',
  styleUrl: './big-widget-card.scss'
})
export class BigWidgetCard {
  @Input() counter: number = 0;
  @Input() imagePath: string | undefined = undefined;
  @Input() title: string = '';
  @Input() date: Date | undefined = undefined; 
}
