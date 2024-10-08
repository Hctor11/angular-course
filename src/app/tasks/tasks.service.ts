import { Injectable } from "@angular/core";
import newTask from "./new-task/new-task.model";

@Injectable({providedIn: 'root'})

export class TaskService {
  private tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Latin Top Jobs Group, es un grupo de empresas con presencia regional',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u1',
      title: 'Master',
      summary: 'con presencia',
      dueDate: '2025-05-31',
    },
    {
      id: 't3',
      userId: 'u2',
      title: 'Ang',
      summary: 'Group, es un grupo de presencia',
      dueDate: '2025-02-22',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Mas',
      summary: 'Jobs Group',
      dueDate: '2025-12-31',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks)
    }
  }
  
  getUsersTasks(userId: string){
    return this.tasks.filter((task) => task.userId === userId)
  }

  addTask(taskData: newTask, userId: string){
    this.tasks.unshift({
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
    });
    this.saveTasks()
  }

  removeTask(id: string){
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
