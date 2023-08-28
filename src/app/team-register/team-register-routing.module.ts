import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamRegisterPage } from './team-register.page';

const routes: Routes = [
  {
    path: '',
    component: TeamRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRegisterPageRoutingModule {}
