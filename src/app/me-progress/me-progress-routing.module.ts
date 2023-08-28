import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeProgressPage } from './me-progress.page';

const routes: Routes = [
  {
    path: '',
    component: MeProgressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeProgressPageRoutingModule {}
