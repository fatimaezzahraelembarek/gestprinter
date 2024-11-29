import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
 
  {
    path: 'details-page',
    loadChildren: () => import('./pages/details-page/details-page.module').then( m => m.DetailsPagePageModule)
  },
  
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  
  {
    path: 'evcalendar',
    loadChildren: () => import('./pages/evcalendar/evcalendar.module').then( m => m.EvcalendarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
