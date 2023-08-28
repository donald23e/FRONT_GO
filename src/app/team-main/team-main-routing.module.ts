import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamMainPage } from './team-main.page';

const routes: Routes = [
  {
    path: '',
    component: TeamMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamMainPageRoutingModule {}
