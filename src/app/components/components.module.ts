import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MaterialsModule } from '../materials/materials.module';
import { TimeComponentComponent } from './time-component/actualTime-component.component';
import { LoadingComponent } from './loading/loading.component';
import { ForecastComponent } from './forecast/forecast.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TempGraphComponent } from './temp-graph/temp-graph.component';
import { BanderasListComponent } from './banderas-list/banderas-list.component';
import { BanderaItemComponent } from './bandera-item/bandera-item.component';
import { ModalPaisComponent } from './modal-pais/modal-pais.component';
import { LocalitationSelectedComponent } from './localitation-selected/localitation-selected.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListTaskComponent } from './list-task/list-task.component';
import { TaskComponent } from './task/task.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    TimeComponentComponent,
    LoadingComponent,
    ForecastComponent,
    TempGraphComponent,
    BanderasListComponent,
    BanderaItemComponent,
    ModalPaisComponent,
    LocalitationSelectedComponent,
    ListTaskComponent,
    TaskComponent
  ],
  exports:[
    TimeComponentComponent,
    LoadingComponent,
    ForecastComponent,
    BanderaItemComponent,
    BanderasListComponent,
    LocalitationSelectedComponent,
    TaskComponent,
    ListTaskComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialsModule,
    NgxChartsModule,
    RouterModule

  ],

})
export class ComponentsModule { }
