import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { oauthGuard } from 'guards/oauth.guard';

const routes: Routes = [
  {
    path:'home',

    canMatch: [oauthGuard],
    loadChildren: ()=> import("./AllPages/homePage/home-page.module").then(m => m.HomePageModule),

  },
  {
    path:'wheater',
    data:{title:'El tiempo ☁'},
    canMatch: [oauthGuard],
    loadChildren: ()=> import("./AllPages/wheater/Pages/pages.module").then(m => m.PagesModule)
  },
  {
    path:'banderas',
    data:{title:'Banderas'},
    canMatch: [oauthGuard],
    loadChildren: ()=> import("./AllPages/banderas/banderas.module").then(m => m.BanderasModule)
  },
  {
    path:'map',
    data:{title:'Mapa'},
    canMatch: [oauthGuard],
    loadChildren: ()=> import("./AllPages/Map/Pages/pages.module").then(m => m.PagesModule)
  },
  {
    path:'oauth',
    loadChildren: ()=> import("./AllPages/oauth/oauth.module").then(m => m.OauthModule)
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
