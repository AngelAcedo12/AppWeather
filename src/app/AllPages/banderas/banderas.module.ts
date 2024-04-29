import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanderasRoutingModule } from './banderas-routing.module';
import { LayaoutComponent } from './layaout/layaout.component';
import { AllComponent } from './all/all.component';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    LayaoutComponent,
    AllComponent
  ],
  imports: [
    CommonModule,
    BanderasRoutingModule,
    SharedModule,
    ComponentsModule
  ]
})
export class BanderasModule { }
