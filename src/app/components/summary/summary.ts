import { Component } from '@angular/core';
import { SmallWidgetCard } from '../ui/cards/small-widget-card/small-widget-card';
import { BigWidgetCard } from '../ui/cards/big-widget-card/big-widget-card';
import { DatePipe } from '@angular/common';

type WidgetSize = 'small' | 'big';

interface WidgetConfig {
  title: string;
  size: WidgetSize;
  counter: number;
  imagePath: string;
  date?: Date
}

@Component({
  selector: 'app-summary',
  imports: [SmallWidgetCard, BigWidgetCard],
  templateUrl: './summary.html',
  styleUrl: './summary.scss',
})
export class Summary {

  firstRowWidgets: WidgetConfig[] = [
    {
      title: 'Tasks Urgent',
      size: 'big',
      imagePath: 'urgent.svg',
      counter: 1,
      date: new Date()
    },
    {
      title: 'Tasks in Board',
      counter: 5,
      size: 'small',
      imagePath: 'tasks-in-board.svg',
    },
  ]

  secondRowWidgets: WidgetConfig[] = [
    {
      title: 'Tasks To-do',
      counter: 1,
      size: 'small',
      imagePath: 'tasks-to-do.svg',
    },
    {
      title: 'Tasks in Progress',
      counter: 2,
      size: 'small',
      imagePath: 'tasks-in-progress.svg',
    },
    {
      title: 'Awaiting Feedback',
      counter: 2,
      size: 'small',
      imagePath: 'awaiting-feedback.svg',
    },
    {
      title: 'Tasks done',
      counter: 1,
      size: 'small',
      imagePath: 'tasks-done.svg',
    },
  ];
}
