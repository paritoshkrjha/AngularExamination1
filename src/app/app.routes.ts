import { Routes } from '@angular/router';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { ViewTaskComponent } from './tasks/view-task/view-task.component';
import { EditTaskComponent } from './tasks/edit-task/edit-task.component';

export const routes: Routes = [
  {
    path: 'add',
    component: AddTaskComponent,
  },
  {
    path: 'view/:id',
    component: ViewTaskComponent,
  },
  {
    path: 'edit/:id',
    component: EditTaskComponent,
  },
  {
    path: '',
    component: TaskListComponent,
  },
];
