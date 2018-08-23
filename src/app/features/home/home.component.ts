import {Component, OnInit} from '@angular/core';
import { DaterangeService } from './../services/daterange/daterange.service';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.pug',
  styleUrls: ['./home.component.styl']
})
export class HomeComponent implements OnInit {
  subscription: Subscription;
  private rangeStart;
  private rangeEnd;
  moment = moment().locale('fr');

  constructor(private ds: DaterangeService) {}

  ngOnInit() {
    this.subscription = this.ds.getStartDay().subscribe(rangeStart => {
      this.rangeStart = moment(rangeStart).locale("fr").format('MMMM DD, YYYY');
    });
    this.subscription = this.ds.getEndDay().subscribe(rangeEnd => {
      this.rangeEnd = moment(rangeEnd).locale("fr").format('MMMM DD, YYYY');
    });
  }

}
