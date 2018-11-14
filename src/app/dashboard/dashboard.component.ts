import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DashboardService } from '../core/api/dashboard/dashboard.service';
import { LeaderModel } from '../shared/models/leader.model';
import { AttendersModel } from '../shared/models/attenders.model';
import { NoviceModel } from '../shared/models/novice.model';
import { DashboardInfoModel } from '../shared/models/dashboard-info.model';
import { DISPLAYED_COLUMNS } from '../shared/const/displayed-columns.const';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = DISPLAYED_COLUMNS.dashboard;
  topMan: LeaderModel[];
  topWoman: LeaderModel[];
  attendersAllTime: AttendersModel[];
  attendersYearly: AttendersModel[];
  novices: NoviceModel[];
  runnersUp: NoviceModel[];
  runnersDown: NoviceModel[];
  dashboardInfo = new DashboardInfoModel();
  isLoaded = false;
  private readonly allTime = 'A';
  private readonly yearly = 'Y';

  constructor(private service: DashboardService) {
  }

  ngOnInit(): void {
    forkJoin(
      this.service.getInfo(),
      this.service.getStats()
    )
      .pipe(delay(300))
      .subscribe(([info, stats]) => {
        this.parseInfo(info);
        this.parseStats(stats);
        this.isLoaded = true;
      });
  }

  private parseInfo({ activeRunners, lastStart, moreThenSixStarts, scoringDate, totalRunners, totalStarts, yearStarts }: any): void {
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
  }

  private parseStats({ topMan, topWoman, attenders, novices, runnersUp, runnersDown }: any): void {
    this.topMan = topMan;
    this.topWoman = topWoman;
    this.attendersAllTime = attenders.filter(el => el.period === this.allTime);
    this.attendersYearly = attenders.filter(el => el.period === this.yearly);
    this.novices = novices;
    this.runnersUp = runnersUp;
    this.runnersDown = runnersDown;
  }
}
