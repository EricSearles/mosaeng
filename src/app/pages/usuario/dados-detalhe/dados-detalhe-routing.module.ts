import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosDetalhePage } from './dados-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: DadosDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosDetalhePageRoutingModule {}
