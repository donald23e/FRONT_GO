import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetoModuloPageRoutingModule } from './reto-modulo-routing.module';

import { RetoModuloPage } from './reto-modulo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetoModuloPageRoutingModule
  ],
  declarations: [RetoModuloPage]
})
export class RetoModuloPageModule {}
