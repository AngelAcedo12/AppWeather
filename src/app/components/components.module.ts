import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialsModule } from '../materials/materials.module';
import { TimeComponentComponent } from './time-component/actualTime-component.component';



@NgModule({
  declarations: [
    TimeComponentComponent
  ],
  exports:[
    TimeComponentComponent
  ],
  imports: [
    CommonModule,
    MaterialsModule
  ]
})
export class ComponentsModule { }
