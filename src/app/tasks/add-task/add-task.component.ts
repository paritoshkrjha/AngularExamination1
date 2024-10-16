import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { TaskService } from '../tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  constructor(private taskService: TaskService, private router: Router) {}

  newTaskFormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    status: new FormControl('TODO'),
  });

  onSubmit() {
    if (
      this.newTaskFormGroup.invalid ||
      this.newTaskFormGroup.value.title === '' ||
      this.newTaskFormGroup.value.description === ''
    ) {
      return;
    }

    this.taskService.addTask({
      title: this.newTaskFormGroup.value.title!,
      description: this.newTaskFormGroup.value.description!,
      status: this.newTaskFormGroup.value.status!,
    });

    this.newTaskFormGroup.reset();
    this.router.navigate(['/']), { replaceUrl: true };
  }
}
