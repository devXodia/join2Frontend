import { Component, Input } from '@angular/core';

@Component({
  selector: 'small-widget-card',
  imports: [],
  templateUrl: './small-widget-card.html',
  styleUrl: './small-widget-card.scss',
})
export class SmallWidgetCard {
  @Input() counter: number = 0;
  @Input() imagePath: string | undefined = undefined;
  @Input() title: string = '';
}
