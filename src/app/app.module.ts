import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
// components
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import{ HttpClientModule}from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InputComponent } from './components/input/input.component';
import { SharedModule } from './components/shared.module';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule } from '@angular/forms';
import { Health } from '@awesome-cordova-plugins/health/ngx';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,SharedModule,HttpClientModule,FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy, },
    Health],
  bootstrap: [AppComponent]
})
export class AppModule {}
