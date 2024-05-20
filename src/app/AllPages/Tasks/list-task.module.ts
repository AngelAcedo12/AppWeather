import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskRoutingModule } from './list-task-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatLabel} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button'
import { ComponentsModule } from '../../components/components.module';
import {MatSelectModule} from '@angular/material/select';
import { NewTaskComponent } from './Pages/list-task/new-task/new-task.component';
import { AllTaskComponent } from './Pages/list-task/all-task/all-task.component';
import { EditTaskComponent } from './Pages/list-task/edit-task/edit-task.component';
import { LayautTaskComponent } from './Pages/list-task/layaut-task/layaut-task.component';
import { SharedModule } from 'shared/shared.module';
@NgModule({ 
  declarations: [
    NewTaskComponent,
    AllTaskComponent,
    EditTaskComponent,
    LayautTaskComponent,
    
  ],exports:[AllTaskComponent],
  imports: [
    ComponentsModule,
    CommonModule,
    ListTaskRoutingModule,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    ComponentsModule,
    MatSelectModule,
    SharedModule

  ],providers:[
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
  }
)
export class ListTaskModule { }
