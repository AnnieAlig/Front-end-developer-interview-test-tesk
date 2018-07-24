import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaterangePickerComponent } from './daterange-picker.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DaterangePickerComponent],
  exports: [DaterangePickerComponent]
})
export class DaterangePickerModule { }
