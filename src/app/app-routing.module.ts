import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'wheater',
    loadChildren: ()=> import("./Pages/pages.module").then(m => m.PagesModule)
  },
  {
    path:'',
    redirectTo:'wheater',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
