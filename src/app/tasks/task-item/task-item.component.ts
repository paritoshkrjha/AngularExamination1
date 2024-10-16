import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { type Task } from '../tasks.type';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input({ required: true }) task!: Task;

  get redirectUrl() {
    return `/view/${this.task.id}`;
  }
}
