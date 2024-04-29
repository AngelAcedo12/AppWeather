import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LayaoutComponent } from './layaout/layaout.component';
import { ShearchPageComponent } from './shearch-page/shearch-page.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialsModule } from '../../../materials/materials.module';
import { ComponentsModule } from '../../../components/components.module';




@NgModule({
  declarations: [
    LayaoutComponent,
    ShearchPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    MaterialsModule,
    ComponentsModule
  ]
})
export class PagesModule { }
