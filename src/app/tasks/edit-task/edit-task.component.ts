import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { TaskService } from '../tasks.service';
import { type Task } from '../tasks.type';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  task!: Task | null;
  editFormGroup!: FormGroup;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTaskById(id!)!;
    const editFormGroup = new FormGroup({
      id: new FormControl(this.task?.id),
      title: new FormControl(this.task?.title, Validators.required),
      description: new FormControl(this.task?.description, Validators.required),
      status: new FormControl(this.task?.status),
    });
    this.editFormGroup = editFormGroup;
  }

  isFormDirty() {
    return (
      JSON.stringify(this.task) !==
      JSON.stringify({
        id: this.editFormGroup.value.id,
        title: this.editFormGroup.value.title,
        description: this.editFormGroup.value.description,
        status: this.editFormGroup.value.status,
      })
    );
  }

  onSubmit() {
    this.taskService.updateTask({
      id: this.task!.id,
      title: this.editFormGroup.value.title!,
      description: this.editFormGroup.value.description!,
      status: this.editFormGroup.value.status!,
    });

    this.router.navigate(['/'], { replaceUrl: true });
  }
}
