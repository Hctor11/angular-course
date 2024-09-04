import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary: 'Latin Top Jobs Group, es un grupo de empresas con presencia regional',
      dueDate: '2025-12-31'
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master',
      summary: 'con presencia',
      dueDate: '2025-05-31'
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Ang',
      summary: 'Group, es un grupo de presencia',
      dueDate: '2025-02-22'
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Mas',
      summary: 'Jobs Group',
      dueDate: '2025-12-31'
    },
  ]

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.userId)
  }
}
