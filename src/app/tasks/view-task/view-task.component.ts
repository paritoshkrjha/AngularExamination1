import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterLink, Router } from '@angular/router';

import { TaskService } from '../tasks.service';
@Component({
  selector: 'app-view-task',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css',
})
export class ViewTaskComponent {
  id!: string | null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
  }

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  get taskDetails() {
    console.log(this.id);
    return this.taskService.getTaskById(this.id!);
  }

  get redirectUrl() {
    return `/edit/${this.id}`;
  }

  onDelete() {
    this.taskService.deleteTask(this.id!);
    this.router.navigate(['/']);
  }
}
