import { Component, input, Input } from '@angular/core';
import { TaskCard } from '../cards/task-card/task-card';
import { Task } from '../../../utils/types';

@Component({
  selector: 'task-container',
  imports: [TaskCard],
  templateUrl: './task-container.html',
  styleUrl: './task-container.scss',
})
export class TaskContainer {
  @Input() status!: string;

  tasks = input<Task[]>();
}
