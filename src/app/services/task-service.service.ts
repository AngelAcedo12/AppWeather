import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task';
import { AllTask } from '../models/DTO/DtoAllTask';
import { StatusTask } from '../utils/statusTask';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor() {}

  loadAllTask(): AllTask {
    var allTaskNotFilter: Task[] = this.getTasks();
    var allTask: AllTask = {
      todoTask: allTaskNotFilter.filter((item) => {
        return item.status == StatusTask.TODO;
      }),
      doingTask: allTaskNotFilter.filter((item) => {
        return item.status == StatusTask.DOING;
      }),
      doneTask: allTaskNotFilter.filter((item) => {
        return item.status == StatusTask.DONE;
      }),
    };
    return allTask;
  }

  saveTasks(task: Task[]) {
    localStorage.setItem('Tasks', JSON.stringify(task));
  }

  removeTask(position: number): Task[] {
    var actualTask: Task[] = JSON.parse(localStorage.getItem('Tasks')!);
    actualTask[position];
    actualTask = actualTask.filter((obj) => {
      return obj !== actualTask[position];
    });
    this.downPositionInList(actualTask);
    return JSON.parse(localStorage.getItem('Tasks')!);
  }

  getOneTask(position: number): Task {
    return this.getTasks()[position];
  }

  replaceTask(newTask: Task, position: number) {
    var tasks: Task[] = this.getTasks();
    var oldTask: Task = tasks[newTask.positionInList-1];
    oldTask.descripcion = newTask.descripcion;
    oldTask.title = newTask.title;
    oldTask.status = newTask.status;
    this.saveTasks(tasks);
    window.alert('Edit succesful');
  }

  getTasks() {
    return JSON.parse(localStorage.getItem('Tasks')!);
  }

  downPositionInList(tasks: Task[]) {
    tasks.map((todo, index) => {
      return (todo.positionInList = index);
    });
    this.saveTasks(tasks);
  }
}
