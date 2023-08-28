import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdvicePageRoutingModule } from './advice-routing.module';

import { AdvicePage } from './advice.page';
import { SharedModule } from '../components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdvicePageRoutingModule,
    SharedModule,
  ],
  declarations: [AdvicePage]
})
export class AdvicePageModule {}
