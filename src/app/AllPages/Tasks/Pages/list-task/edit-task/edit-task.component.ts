import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { StatusTask } from 'utils/statusTask';
import { TaskServiceService } from 'services/task-service.service';
import { Task } from 'models/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
   
  constructor(private TaskService : TaskServiceService, private route :ActivatedRoute){
    
    
  }
  
  ngOnInit(): void {
    
    this.id= (this.route.snapshot.params["id"])
    this.actualTask = this.TaskService.getOneTask(this.id!);
  }

  id: number | undefined;
  
  formTask  = new FormGroup({
    titleTask: new FormControl(''),
    descripcionTask: new FormControl(''),
    statusTask: new FormControl('TODO')
  })
  status: string[] = [
    StatusTask.TODO,
    StatusTask.DOING,
    StatusTask.DONE,

  ]
  actualTask: Task|undefined;
  
  
  onInputTaskTitle() {

    this.actualTask!.title=this.formTask.value.titleTask || "";
    
  }
  onInputTaskDescription(){
    this.actualTask!.descripcion=this.formTask.value.descripcionTask || "";
    
  }
  onInputTaskStatus(){
    this.actualTask!.status=this.formTask.value.statusTask ||"";
  }
  postForm() {
    this.TaskService.replaceTask(this.actualTask!,this.actualTask!.positionInList)
  }
}
