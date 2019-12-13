import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoDetalhePageRoutingModule } from './historico-detalhe-routing.module';

import { HistoricoDetalhePage } from './historico-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoDetalhePageRoutingModule
  ],
  declarations: [HistoricoDetalhePage]
})
export class HistoricoDetalhePageModule {}
