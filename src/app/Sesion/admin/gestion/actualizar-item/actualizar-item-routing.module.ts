import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ActualizarItemComponent } from './actualizar-item.component';

const routes: Routes = [
  {
    path: '',
    component: ActualizarItemComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class ActualizarItemRoutingModule { }
