import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaterangePickerComponent } from './daterange-picker.component';
import { DaterangeOptionsComponent } from './daterange-options/daterange-options.component';
import { DaterangeCalendarComponent } from './daterange-calendar/daterange-calendar.component';
import { DaterangeHeaderComponent } from './daterange-header/daterange-header.component';
import { DateTransformDirective } from './date-transform.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DaterangePickerComponent, DaterangeOptionsComponent, DaterangeCalendarComponent, DaterangeHeaderComponent, DateTransformDirective],
  exports: [DaterangePickerComponent]
})
export class DaterangePickerModule { }
