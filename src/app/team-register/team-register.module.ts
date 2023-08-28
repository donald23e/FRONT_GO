import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TeamRegisterPageRoutingModule } from './team-register-routing.module';
import { TeamRegisterPage } from './team-register.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamRegisterPageRoutingModule,

  ],
  declarations: [TeamRegisterPage]
})
export class TeamRegisterPageModule {}
