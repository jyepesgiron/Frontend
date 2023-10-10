import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { FuncionComponent } from './funcion.component';

const routes: Routes = [
  {
    path: '',
    component: FuncionComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class FuncionRoutingModule { }
