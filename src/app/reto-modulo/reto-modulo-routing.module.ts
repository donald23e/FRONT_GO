import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RetoModuloPage } from './reto-modulo.page';

const routes: Routes = [
  {
    path: '',
    component: RetoModuloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RetoModuloPageRoutingModule {}
