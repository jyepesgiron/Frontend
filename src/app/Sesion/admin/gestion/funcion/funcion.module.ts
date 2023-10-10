import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { FuncionComponent } from './funcion.component';
import { FuncionRoutingModule } from './funcion-routing.module';

@NgModule({
  declarations: [FuncionComponent],
  imports: [BrowserModule, IonicModule.forRoot(), FuncionRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [FuncionComponent],
})
export class FuncionModule {}
