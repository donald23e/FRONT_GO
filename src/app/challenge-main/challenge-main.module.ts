import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChallengeMainPageRoutingModule } from './challenge-main-routing.module';

import { ChallengeMainPage } from './challenge-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChallengeMainPageRoutingModule
  ],
  declarations: [ChallengeMainPage]
})
export class ChallengeMainPageModule {}
