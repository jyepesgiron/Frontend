import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Logueo',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'Logueo',
    loadChildren: () => import('./logueo/logueo.module').then( m => m.LogueoPageModule)
  },
  {
    path: 'Gestion',
    loadChildren: () => import('./Sesion/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'Funcion',
    loadChildren: () => import('./Sesion/estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
