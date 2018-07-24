import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MainComponent } from './layouts/main/main.component';
import {LayoutsModule} from './layouts/layouts.module';
import {RouterModule} from '@angular/router';

import { AppRoutingModule } from './app.routing';
import {HomeModule} from './features/home/home.module';
import {CoreModule} from './core/core.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    LayoutsModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
