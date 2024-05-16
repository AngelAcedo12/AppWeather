import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayautComponent } from './Pages/layaut/layaut.component';
import { PageGetTokenComponent } from './Pages/page-get-token/page-get-token.component';

const routes: Routes = [
   {
    path: '',
    component: LayautComponent,
    children: [
      {
        path: '',
        component: PageGetTokenComponent
      }
    ]
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TokensRoutingModule { }
