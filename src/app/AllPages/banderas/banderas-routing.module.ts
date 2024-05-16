import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { LayaoutComponent } from './layaout/layaout.component';

const routes: Routes = [
  {
      path: '',
      component: LayaoutComponent,  
      children: [
          {
              path: '',
              component: AllComponent
          },
      ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BanderasRoutingModule { }
