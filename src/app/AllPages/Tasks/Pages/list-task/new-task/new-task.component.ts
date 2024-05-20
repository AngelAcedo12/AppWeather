import { Component } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';
import { Task } from 'models/task';
import { TaskServiceService } from 'services/task-service.service';
import { StatusTask } from 'utils/statusTask';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  constructor(private TaskService: TaskServiceService){

  }

  status: string[] = [
    StatusTask.TODO,
    StatusTask.DOING,
    StatusTask.DONE,

  ]
  

  formTask  = new FormGroup({
      titleTask: new FormControl(''),
      descripcionTask: new FormControl(''),
      statusTask: new FormControl('TODO')
  })

  actualTask : Task  ={
    descripcion:"",
    title:"",
    status:"",
    positionInList:0
  };

  
  onInputTask(){
    this.actualTask.descripcion=this.formTask.value.descripcionTask || "";
    this.actualTask.title=this.formTask.value.titleTask || "";
    this.actualTask.status=this.formTask.value.statusTask || "";
    console.log(this.actualTask.status)
  }

  postForm(){
      var tasks : Task[]= this.TaskService.getTasks();
      console.log(tasks)
      if(tasks==null){
    
        tasks=[]
        tasks.push(this.actualTask)
       
      }else{
        this.actualTask.positionInList=tasks.length+1
        tasks.push(this.actualTask)
      }
      console.log(this.actualTask)
      this.TaskService.saveTasks(tasks);
      window.alert("Task guardada")
  }


}
