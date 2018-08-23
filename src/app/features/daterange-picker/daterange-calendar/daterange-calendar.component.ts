import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as moment from 'moment';
import { DaterangeService } from '../../services/daterange/daterange.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'daterange-calendar',
  templateUrl: './daterange-calendar.component.pug',
  styleUrls: ['./daterange-calendar.component.styl'],
  providers: [DatePipe]
})
export class DaterangeCalendarComponent implements OnInit, AfterViewInit {
  @ViewChild('scrollTo') scrollTo: ElementRef;
  subscription: Subscription;
  startDay;
  endDay;

  constructor( private ds: DaterangeService, private datePipe: DatePipe ) { }

  dateNow = new Date;

  years = [this.dateNow.getFullYear(), this.dateNow.getFullYear() + 1];
  months = moment.monthsShort();

  currrentYear = this.dateNow.getFullYear();
  currentMonth = this.dateNow.getMonth();

  getAllDays = (year, month) =>
    this.ds.getAllDays(year, month)


  isStartDay = (startDay, day) =>
    this.datePipe.transform(startDay, 'yyyy-dd-MM') === this.datePipe.transform(day, 'yyyy-dd-MM')
  isEndDay = (endDay, day) =>
    this.datePipe.transform(endDay, 'yyyy-dd-MM') === this.datePipe.transform(day, 'yyyy-dd-MM')
  inRange = (startDay, endDay, day) =>
    this.datePipe.transform(day, 'yyyy-MM-dd') >= this.datePipe.transform(startDay, 'yyyy-MM-dd') && this.datePipe.transform(day, 'yyyy-MM-dd') <= this.datePipe.transform(endDay, 'yyyy-MM-dd')

  setRange = day => {
    this.ds.setRange(day);
  }

  ngOnInit() {
    this.subscription = this.ds.getStartDay().subscribe(startDay => {
      this.startDay = startDay;
    });
    this.subscription = this.ds.getEndDay().subscribe(endDay => {
      this.endDay = endDay;
    });
  }
  ngAfterViewInit() {
    this.scrollTo.nativeElement.parentElement.scrollIntoView();
  }

}
