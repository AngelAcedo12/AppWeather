import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayaoutComponent } from './layaout/layaout.component';
import { MapComponent } from './map/map.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from 'services/interceptors/spinner-interceptor.interceptor';

const routes: Routes = [
  {
    path:'',
    component: LayaoutComponent,
    children:[
      {
        path:'',
        component: MapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PagesRoutingModule { }
