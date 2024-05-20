import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'models/task';
import { TaskServiceService } from 'services/task-service.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  
  constructor(private TaskService : TaskServiceService){

  }
  
  @Output() newTaskList = new EventEmitter<Task[]>
  @Input({required:true}) task : Task| undefined;
  @Input({required:true}) pos : number | undefined;
  @Input({required:true}) isPreview : boolean | undefined;
  
  removedTask(position: number,type:string){
    this.newTaskList.emit(this.TaskService.removeTask(position))
  }
}
