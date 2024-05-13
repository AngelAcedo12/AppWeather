import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OauthRoutingModule } from './oauth-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LayaoutComponent } from './layaout/layaout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from 'materials/materials.module';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LogInComponent,
    SingUpComponent,
    LayaoutComponent
  ],
  imports: [
    CommonModule,
    OauthRoutingModule,
    ReactiveFormsModule,
    MaterialsModule,
    SharedModule,
    RouterModule
  ]
})
export class OauthModule { }
