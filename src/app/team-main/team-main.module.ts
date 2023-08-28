import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamMainPageRoutingModule } from './team-main-routing.module';

import { TeamMainPage } from './team-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamMainPageRoutingModule
  ],
  declarations: [TeamMainPage]
})
export class TeamMainPageModule {}
