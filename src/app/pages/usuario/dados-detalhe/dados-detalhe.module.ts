import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosDetalhePageRoutingModule } from './dados-detalhe-routing.module';

import { DadosDetalhePage } from './dados-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosDetalhePageRoutingModule
  ],
  declarations: [DadosDetalhePage]
})
export class DadosDetalhePageModule {}
