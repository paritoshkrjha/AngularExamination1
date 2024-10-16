import { Component } from '@angular/core';
import { TaskService } from '../tasks.service';
import { RouterLink } from '@angular/router';
import { TaskItemComponent } from "../task-item/task-item.component";

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  constructor(private taskService: TaskService) {}

  get allTasks() {
    return this.taskService.getTasks();
  }
}
