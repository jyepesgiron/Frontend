import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FuncionModule } from './funcion/funcion.module';
import { ActualizarItemModule } from './actualizar-item/actualizar-item.module';

import { GestionPageRoutingModule } from './gestion-routing.module';

import { GestionPage } from './gestion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionPageRoutingModule
  ],
  declarations: [GestionPage]
})
export class GestionPageModule {}
