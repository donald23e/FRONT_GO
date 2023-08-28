import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeMainPage } from './challenge-main.page';

const routes: Routes = [
  {
    path: '',
    component: ChallengeMainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChallengeMainPageRoutingModule {}
