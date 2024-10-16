import { Injectable } from '@angular/core';
import { NewTask, type Task } from './tasks.type';
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'First Task',
      description: 'This is the first task',
      status: 'TODO',
    },
    {
      id: '2',
      title: 'Second Task',
      description: 'This is the second task',
      status: 'IN_PROGRESS',
    },
    {
      id: '3',
      title: 'Third Task',
      description: 'This is the third task',
      status: 'COMPLETED',
    },
  ];

  getTasks() {
    return this.tasks;
  }

  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id);
  }

  addTask(task: NewTask) {
    const id = this.tasks.length + 1;
    this.tasks.push({ ...task, id: id.toString() });
  }

  updateTask(task: Task) {
    this.tasks = this.tasks.map((t) => (t.id === task.id ? task : t));
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
