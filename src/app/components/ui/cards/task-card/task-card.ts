import { Component, input } from '@angular/core';
import { Task } from '../../../../utils/types';
import { Tag } from '../../tag/tag';
import { ProgressBar } from '../../progress-bar/progress-bar';

@Component({
  selector: 'task-card',
  imports: [Tag, ProgressBar],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  task = input<Task>();
}
