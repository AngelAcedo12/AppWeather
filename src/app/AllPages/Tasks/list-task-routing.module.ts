import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTaskComponent } from './Pages/list-task/all-task/all-task.component';
import { NewTaskComponent } from './Pages/list-task/new-task/new-task.component';
import { EditTaskComponent } from './Pages/list-task/edit-task/edit-task.component';
import { LayautTaskComponent } from './Pages/list-task/layaut-task/layaut-task.component';

const routes: Routes = [{
  path:'',
  component:LayautTaskComponent, children:[
    {
      path:'',component: AllTaskComponent
    },
    {
      path:'all/:filter',component:AllTaskComponent
    },
    {
    path:'newTask', component:NewTaskComponent
    },
    {
      path:'editTask/:id',component:EditTaskComponent
    }
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListTaskRoutingModule { }
