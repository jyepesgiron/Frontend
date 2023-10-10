import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionPage } from './gestion.page';
import { FuncionComponent } from './funcion/funcion.component';
import { ActualizarItemComponent } from './actualizar-item/actualizar-item.component';

const routes: Routes = [
  {
    path: '',
    component: GestionPage,
    children:[
      {path: 'Agg', component: FuncionComponent},
      {path: 'Act', component: ActualizarItemComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionPageRoutingModule {}
