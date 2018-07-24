import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home.component';
import { HOME_ROUTE } from './home.routing';
import {DaterangePickerModule} from '../daterange-picker/daterange-picker.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([HOME_ROUTE]),
    DaterangePickerModule,
  ],
  declarations: [
    HomeComponent,
  ],
  entryComponents: [
  ],
  providers: [
  ],
  schemas: []
})
export class HomeModule { }
