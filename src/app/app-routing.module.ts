import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    data:{title:'Home'},

    loadChildren: ()=> import("./AllPages/homePage/home-page.module").then(m => m.HomePageModule)
  },
  {
    path:'wheater',
    data:{title:'El tiempo ☁'},
    loadChildren: ()=> import("./AllPages/wheater/Pages/pages.module").then(m => m.PagesModule)
  },
  {
    path:'banderas',
    data:{title:'Banderas'},
    loadChildren: ()=> import("./AllPages/banderas/banderas.module").then(m => m.BanderasModule)
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
