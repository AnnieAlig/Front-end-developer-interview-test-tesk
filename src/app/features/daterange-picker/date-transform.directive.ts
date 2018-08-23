import { Directive, HostListener, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as moment from 'moment';

@Directive({
  selector: '[dateTransform]',
  providers: [DatePipe]
})
export class DateTransformDirective {

  private input: HTMLInputElement;

  constructor(private elementRef?: ElementRef, private datePipe?: DatePipe) {
    this.input = this.elementRef.nativeElement;
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.input.value = this.datePipe.transform(moment(value, 'll').toDate(), 'MM/dd/y');
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.input.value = this.datePipe.transform(moment(value, 'MM/DD/YYYY').toDate(), 'mediumDate');
  }

}
