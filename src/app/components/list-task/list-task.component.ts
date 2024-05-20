import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { AllTask } from '../../models/DTO/DtoAllTask';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {

  constructor(private TaskService:TaskServiceService){

  }

  ngOnInit(): void {
    this.tasks=this.TaskService.loadAllTask();
  }
  @Input({required:true}) filterStatus : String | undefined;

  tasks : AllTask | undefined

 refrestList(){
    this.tasks=this.TaskService.loadAllTask()
  }

}
