import { Component, Signal, signal } from '@angular/core';
import { TaskContainer } from '../ui/task-container/task-container';

export enum TaskStatus {
  TODO = 'To Do',
  INPROGRESS = 'In Progress',
  DONE = 'Done',
  AWAITFEEDBACK = 'Await Feedback',
}

@Component({
  selector: 'app-board',
  imports: [TaskContainer],
  templateUrl: './board.html',
  styleUrl: './board.scss',
})
export class Board {
  statuses = TaskStatus;
  taskStatuses: Signal<TaskStatus[]> = signal(Object.values(this.statuses));
  constructor() {
    console.log(this.taskStatuses);
  }
}
