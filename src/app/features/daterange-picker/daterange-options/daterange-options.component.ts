import { Component, OnInit } from '@angular/core';
import { DaterangeService } from '../../services/daterange/daterange.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'daterange-options',
  templateUrl: './daterange-options.component.pug',
  styleUrls: ['./daterange-options.component.styl']
})
export class DaterangeOptionsComponent implements OnInit {
  subscription: Subscription;

  startDay: String;
  endDay: String;

  constructor(private ds: DaterangeService) { }

  options = [
    {
      option: 'Today',
      startDay: moment(),
      endDay: moment(),
      subOptions:[]
    },
    {
      option: 'Yesterday',
      startDay: moment().add(- 1, 'days'),
      endDay: moment().add(- 1, 'days'),
      subOptions:[]
    },
    {
      option: 'This week',
      subOptions: [
        {
          name: 'Sun-Today',
          startDay: moment().add((moment().day()) * -1, 'days'),
          endDay: moment()
        },
        {
          name: 'Mon-Today',
          startDay: moment().add((moment().day()) * -1 + 1, 'days'),
          endDay: moment()
        }
      ],
      currentSuboption: 'Sun-Today',
    },
    {
      option: 'Last 7 days',
      startDay: moment().add(-7, 'days'),
      endDay: moment().add(- 1, 'days'),
      subOptions:[]
    },
    {
      option: 'Last week',
      subOptions: [
        {
          name: 'Sun-Sat',
          startDay: moment().day('Sunday').week(moment().week() - 1),
          endDay: moment().day('Saturday').week(moment().week() - 1)
        },
        {
          name: 'Mon-Sun',
          startDay: moment().day('Monday').week(moment().week() - 1),
          endDay: moment().day('Sunday').week(moment().week())
        }
      ],
      currentSuboption: 'Sun-Sat',
    },
    {
      option: 'Last 14 days',
      startDay: moment().add(- 14, 'days'),
      endDay: moment().add(- 1, 'days'),
      subOptions:[]
    },
    {
      option: 'This month',
      startDay: moment().startOf('month'),
      endDay: moment(),
      subOptions:[]
    },
    {
      option: 'Last 30 days',
      startDay: moment().add(-30, 'days'),
      endDay: moment().add(- 1, 'days'),
      subOptions:[]
    },
    {
      option: 'Last month',
      startDay: moment().subtract(1, 'months').date(1),
      endDay: moment().add(0, 'months').date(0),
      subOptions:[]
    },
    {
      option: 'All time',
      startDay: moment().startOf('year'),
      endDay: moment().add(1, 'year').endOf('year'),
      subOptions:[]
    }
  ];

  setOption = option =>
    this.ds.setOption(option)

  setInputOption = (days, option) =>
    this.ds.setInputOption(days, option)

  setSubOption = (option, suboption, startDay?, endDay?) => {
    if (!startDay) {
      this.options.forEach(function(item) {
        if (item.option === option){
          for (var suboption in item.subOptions) {
            if (item.subOptions[suboption].name === item.currentSuboption) {
              startDay = item.subOptions[suboption].startDay;
              endDay = item.subOptions[suboption].endDay;
            }
          }
        }
      });
    }
    this.ds.setSubOption(option, startDay, endDay);
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i].option === option) {
        this.options[i].currentSuboption = suboption;
      }
    }
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
