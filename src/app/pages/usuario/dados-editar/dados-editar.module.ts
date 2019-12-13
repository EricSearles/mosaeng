import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosEditarPageRoutingModule } from './dados-editar-routing.module';

import { DadosEditarPage } from './dados-editar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosEditarPageRoutingModule
  ],
  declarations: [DadosEditarPage]
})
export class DadosEditarPageModule {}
