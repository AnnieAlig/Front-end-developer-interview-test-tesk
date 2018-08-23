import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { MainComponent } from './layouts/main/main.component';
import {LayoutsModule} from './layouts/layouts.module';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app.routing';
import {HomeModule} from './features/home/home.module';
import {CoreModule} from './core/core.module';

import { DaterangeService } from './features/services/daterange/daterange.service';
import { AuthenticationService } from './core/services/auth/auth.service';

export function app_init (as:AuthenticationService){
  return () => as.auth();
}

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
  ],
  providers: [
    AuthenticationService,
    DaterangeService,
    { provide : APP_INITIALIZER, useFactory: app_init, deps:[AuthenticationService], multi: true}
  ],
  bootstrap: [MainComponent],
})
export class AppModule { }
