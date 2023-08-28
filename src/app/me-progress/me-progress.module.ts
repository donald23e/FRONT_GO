import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeProgressPageRoutingModule } from './me-progress-routing.module';

import { MeProgressPage } from './me-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeProgressPageRoutingModule
  ],
  declarations: [MeProgressPage]
})
export class MeProgressPageModule {}
