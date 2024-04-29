import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutComponent } from './layaout/layaout.component';
import { ShearchPageComponent } from './shearch-page/shearch-page.component';

const routes: Routes = [
  {
    path:'', 
    component:LayaoutComponent,
    children:[
      {
        path:'',
        component:ShearchPageComponent
      },

    ]
  
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
