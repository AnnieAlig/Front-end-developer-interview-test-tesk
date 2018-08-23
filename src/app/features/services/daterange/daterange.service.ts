import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable(
  
)
export class DaterangeService {
  public startDay = new BehaviorSubject(moment());
  public endDay = new BehaviorSubject(moment());
  public allDays = new BehaviorSubject([]);

  public manuallyStartError = new BehaviorSubject('');
  public manuallyEndError = new BehaviorSubject('');
  private firstDay = moment().startOf('year');
  private lastDay = moment().add(1, 'year').endOf('year');

  private startRange;

  constructor() { }

  // OPTIONS

  private selectedOption = 'Today';
  private selectedSuboption;

  setOption = (option) => {
    if (option.option) {
      this.selectedOption = option.option;
      this.setStartDay(option.startDay);
      this.setEndDay(option.endDay);
    } else {
      this.selectedOption = 'Custom';
    }
  }

  setSubOption = (option, startDay, endDay) => {
    this.selectedOption = option;
    this.setStartDay(startDay);
    this.setEndDay(endDay);
  }

  setInputOption = (days, option) => {
    this.selectedOption = option;
    if (option === 'days_to_today') {
      this.setEndDay(moment());
      this.setStartDay(moment().add(-days.value, 'days'));
    } else if (option === 'days_to_yesterday') {
      this.setEndDay(moment().add(-1, 'days'));
      this.setStartDay(moment().add(-days.value - 1, 'days'));
    }
  }

  setStartDay = day => {
    this.manuallyStartError.next('');
    this.manuallyEndError.next('');
    this.startDay.next(day);
  }

  getStartDay = (): Observable<any> =>
    this.startDay.asObservable()

  setEndDay = (day) => {
      this.manuallyStartError.next('');
      this.manuallyEndError.next('');
      this.endDay.next(day);
    }

  getEndDay = (): Observable<any> =>
    this.endDay.asObservable()

  getStartError = (): Observable<any> =>
    this.manuallyStartError.asObservable()

// INPUTS
  setStartDayManually(startday) {
    this.selectedOption = 'Custom';
    startday = moment(startday, 'MM/DD/YYYY');
    if (startday > this.endDay.value) {
      this.manuallyStartError.next('Enter ' + this.endDay.value.format('MM/DD/YYYY') + ' or earlier');
    } else if (startday < this.firstDay) {
      this.manuallyStartError.next('Enter ' + this.firstDay.format('MM/DDYYYY') + ' or later');
    } else if (startday.isValid()) {
      this.setStartDay(startday);
      this.manuallyStartError.next('');
    } else {
      this.manuallyStartError.next('Please enter a valid date');
    }
    return this.manuallyStartError;
    }
    setEndDayManually = (endday) => {
    this.selectedOption = 'Custom';
    endday = moment(endday, 'MM/DD/YYYY');
    if (endday < this.startDay.value) {
      this.manuallyEndError.next('Enter ' + this.startDay.value.format('MM/DD/YYYY') + ' or later');
    } else if (endday > this.lastDay) {
      this.manuallyEndError.next('Enter ' + this.lastDay.format('MM/DD/YYYY') + ' or earlier');
    } else if (endday.isValid()) {
      this.setEndDay(endday);
      this.manuallyEndError.next('');
    } else {
      this.manuallyEndError.next('Please enter a valid date');
    }
  }

// RANGE

  setRange = day => {
    this.selectedOption = 'Custom';
    if (!this.startRange) {
      this.startRange = day;
      this.setStartDay(day);
      if (moment(day).format('YYYY-MM-DD') > moment(this.endDay.value).format('YYYY-MM-DD')) {
        this.setEndDay(day);
      }
    } else if (day < this.startDay.value) {
      this.setStartDay(day);
    } else if (moment(day).format('YYYY-MM-DD') === moment(this.startDay.value).format('YYYY-MM-DD')) {
      delete this.startRange;
    } else {
      this.setEndDay(day);
    }
  }


  // CALENDAR
  getAllDays(year, month) {
    const currentDate = year + '-' + month;
    const daysInMonth = moment(currentDate, 'YYYY-MM').daysInMonth();
    const allDays = [];
    const firstDay = new Date(year, month - 1, 1);
    let offset = firstDay.getDay();

    if (offset >= 0) {
      if (offset < 3) {
        offset += 7;
      }
      for (let o = 0; o < offset; o++ ) {
        const newDay = {
          number: 0,
          fulldate: '',
          active: false,
          startDay: false,
          endDay: false
        };
        allDays.push(newDay);
      }
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const today = moment().format('YYYY-M-D');
      const isToday = currentDate + '-' + i === today;
      const fulldate = moment(currentDate + '-' + i, 'YYYY-MM-DD').toDate();

      const newDay = {
        number: i,
        fulldate: fulldate,
        today: isToday
      };

      allDays.push(newDay);
    }
    this.allDays.next(allDays);
    return allDays;
  }
}
