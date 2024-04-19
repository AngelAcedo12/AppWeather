import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialsModule } from '../materials/materials.module';
import { TimeComponentComponent } from './time-component/actualTime-component.component';
import { LoadingComponent } from './loading/loading.component';
import { ForecastComponent } from './forecast/forecast.component';




@NgModule({
  declarations: [
    TimeComponentComponent,
    LoadingComponent,
    ForecastComponent,

  ],
  exports:[
    TimeComponentComponent,
    LoadingComponent,
    ForecastComponent
    
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ]
})
export class ComponentsModule { }
