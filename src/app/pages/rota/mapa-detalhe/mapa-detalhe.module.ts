import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapaDetalhePageRoutingModule } from './mapa-detalhe-routing.module';

import { MapaDetalhePage } from './mapa-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaDetalhePageRoutingModule
  ],
  declarations: [MapaDetalhePage]
})
export class MapaDetalhePageModule {}
