import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbandonaPageRoutingModule } from './abandona-routing.module';

import { AbandonaPage } from './abandona.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbandonaPageRoutingModule
  ],
  declarations: [AbandonaPage]
})
export class AbandonaPageModule {}
