import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../core/api/dashboard/dashboard.service';
import { LeaderModel } from '../shared/models/leader.model';
import { AttendersModel } from '../shared/models/attenders.model';
import { NoviceModel } from '../shared/models/novice.model';
import { DashboardInfoModel } from '../shared/models/dashboard-info.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  leadersColumns: string[] = ['place', 'fullname', 'points', 'duration'];
  topMan: LeaderModel[];
  topWoman: LeaderModel[];
  attendersAllTime: AttendersModel[];
  attendersYearly: AttendersModel[];
  novices: NoviceModel[];
  runnersUp: NoviceModel[];
  runnersDown: NoviceModel[];
  dashboardInfo = new DashboardInfoModel();
  private readonly allTime = 'A';
  private readonly yearly = 'Y';

  constructor(private service: DashboardService) {
  }

  ngOnInit(): void {
    this.service.getStats()
      .subscribe(({ topMan, topWoman, attenders, novices, runnersUp, runnersDown }) => {
        this.topMan = topMan;
        this.topWoman = topWoman;
        this.attendersAllTime = attenders.filter(el => el.period === this.allTime);
        this.attendersYearly = attenders.filter(el => el.period === this.yearly);
        this.novices = novices;
        this.runnersUp = runnersUp;
        this.runnersDown = runnersDown;
      });

    this.service.getInfo()
      .subscribe(({ activeRunners, lastStart, moreThenSixStarts, scoringDate, totalRunners, totalStarts, yearStarts }) => {
        this.dashboardInfo = {
          ...this.dashboardInfo,
          activeRunners,
          lastStart,
          moreThenSixStarts,
          scoringDate,
          totalRunners,
          totalStarts,
          yearStarts
        };
      });
  }
}
