import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbandonaPage } from './abandona.page';

const routes: Routes = [
  {
    path: '',
    component: AbandonaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbandonaPageRoutingModule {}
