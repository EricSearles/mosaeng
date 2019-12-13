import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosEditarPage } from './dados-editar.page';

const routes: Routes = [
  {
    path: '',
    component: DadosEditarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosEditarPageRoutingModule {}
