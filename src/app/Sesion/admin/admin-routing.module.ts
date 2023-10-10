import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';
import { InicioComponent } from './inicio/inicio.component';
import { ModificacionComponent } from './modificacion/modificacion.component';
import { RevisionComponent } from './revision/revision.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children:[
      {path: '', component: InicioComponent},
      {path: 'Gestion', loadChildren: () => import('./gestion/gestion.module').then( m => m.GestionPageModule)},
      {path: 'Revision', component: RevisionComponent},
      {path: 'Modificacion', component: ModificacionComponent}
    ]
  },
  {
    path: 'gestion',
    loadChildren: () => import('../../Sesion/admin/gestion/gestion.module').then( m => m.GestionPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
