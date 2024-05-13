import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutComponent } from './layaout/layaout.component';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {
    path:'',
    component: LayaoutComponent,
    children:[
      {
        path:'log-in',
        component: LogInComponent,
      },
      {
        path:'sing-up',
        component: SingUpComponent,
        
      }
    ]

  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OauthRoutingModule { }
