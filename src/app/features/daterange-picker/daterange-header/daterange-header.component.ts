import { Component, OnInit } from '@angular/core';
import { DaterangeService } from '../../services/daterange/daterange.service';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'daterange-header',
  templateUrl: './daterange-header.component.pug',
  styleUrls: ['./daterange-header.component.styl'],
  providers: [DatePipe]
})
export class DaterangeHeaderComponent implements OnInit {
  subscription: Subscription;
  private startDay;
  private endDay;

  manuallyStartError: String;
  manuallyEndError: String;

  constructor(private ds: DaterangeService, private datePipe: DatePipe) {}

  // Getting week days names
  weekDays = this.getWeekDays('en-US');
  getWeekDays(locale) {
  const baseDate = new Date(Date.UTC(2017, 0, 1));
  const weekDays = [];
  for (let i = 0; i < 7; i++) {
        weekDays.push(baseDate.toLocaleDateString(locale, { weekday: 'narrow' }));
        baseDate.setDate(baseDate.getDate() + 1);
    }
    return weekDays;
  }


  setStartDayManually = (startday) => {
    this.ds.setStartDayManually(startday);
    this.subscription = this.ds.manuallyStartError.subscribe(startError => {
      this.manuallyStartError = startError;
    });
  }

  setEndDayManually = (endday) => {
  this.ds.setEndDayManually(endday);
    this.subscription = this.ds.manuallyEndError.subscribe(endError => {
      this.manuallyEndError = endError;
    });
  }


  ngOnInit() {
    this.subscription = this.ds.getStartDay().subscribe(startDay => {
      this.startDay = startDay;
    });
    this.subscription = this.ds.getEndDay().subscribe(endDay => {
      this.endDay = endDay;
    });
  }

}
