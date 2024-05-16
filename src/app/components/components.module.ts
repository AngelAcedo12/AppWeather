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

  ],
  exports:[
    TimeComponentComponent,
    LoadingComponent,
    ForecastComponent,
    BanderaItemComponent,
    BanderasListComponent,
    LocalitationSelectedComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MaterialsModule,
    NgxChartsModule,

  ],

})
export class ComponentsModule { }
