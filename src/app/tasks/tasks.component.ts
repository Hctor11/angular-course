import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './tasks.service';
import type newTask from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;
  private taskService: TaskService;

  constructor(taskService: TaskService) {
    this.taskService = taskService;
  }
 
  get selectedUserTasks() {
    return this.taskService.getUsersTasks(this.userId);
  }

  onCompleteTask(id: string) {
  }

  onStartAddTask(){
    this.isAddingTask = true
  }

  onCancelAddTask(){
    this.isAddingTask = false
  }

  onAddTask(taskData: newTask){
  }
}
