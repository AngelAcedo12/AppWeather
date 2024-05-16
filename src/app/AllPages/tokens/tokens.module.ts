import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokensRoutingModule } from './tokens-routing.module';
import { LayautComponent } from './Pages/layaut/layaut.component';
import { SharedModule } from 'shared/shared.module';
import { RouterModule } from '@angular/router';
import { PageGetTokenComponent } from './Pages/page-get-token/page-get-token.component';
import { ComponentsModule } from 'components/components.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from 'services/interceptors/interceptorJWT.interceptor';


@NgModule({
  declarations: [
    LayautComponent,
    PageGetTokenComponent
  ],
  imports: [
    CommonModule,
    TokensRoutingModule,
    SharedModule,
    RouterModule,
    ComponentsModule
  ],
  providers: [
   
  ]
})
export class TokensModule { }
