import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialsModule } from '../materials/materials.module';
import { TimeComponentComponent } from './time-component/actualTime-component.component';
import { LoadingComponent } from './loading/loading.component';




@NgModule({
  declarations: [
    TimeComponentComponent,
    LoadingComponent,

  ],
  exports:[
    TimeComponentComponent,
    LoadingComponent,
    
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ]
})
export class ComponentsModule { }
