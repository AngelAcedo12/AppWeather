import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MapComponent } from './map/map.component';
import { LayaoutComponent } from './layaout/layaout.component';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'components/components.module';


@NgModule({
  declarations: [
    MapComponent,
    LayaoutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  providers: [

  ]
})
export class PagesModule { }
