import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { forkJoin } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { CompetitionViewService } from '../../../core/api/competition-view/competition-view.service';
import { CompetitionInfoModel } from '../../../shared/models/competition-info.model';
import { DISPLAYED_COLUMNS } from '../../../shared/const/displayed-columns.const';

@Component({
  selector: 'app-competition-view',
  templateUrl: './competition-view.component.html',
  styleUrls: ['./competition-view.component.scss']
})
export class CompetitionViewComponent implements OnInit {
  id: number;
  competitionInfo = new CompetitionInfoModel();
  runnersMan = [];
  runnersGroupMan = [];
  runnersWoman = [];
  runnersGroupWoman = [];
  isLoaded = false;
  displayedColumns: string[] = DISPLAYED_COLUMNS.singleCompetition;
  tableHeadersOffset: number;

  constructor(private route: ActivatedRoute,
              private service: CompetitionViewService) {
    this.tableHeadersOffset = -10;
  }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);

    forkJoin(
      this.service.getStats(this.id),
      this.service.getCompetitionInfo(this.id)
    )
      .pipe(
        finalize(() => this.isLoaded = true)
      )
      .subscribe(([stats, competitionInfo]) => {
        this.parseStats(stats);
        this.parseCompetitionInfo(competitionInfo);
      });
  }

  private parseStats({ man, woman }: any): void {
    this.runnersMan = Object.values(man).map((el: any[]) => new MatTableDataSource(el));
    this.runnersGroupMan = Object.keys(man);
    this.runnersWoman = Object.values(woman).map((el: any[]) => new MatTableDataSource(el));
    this.runnersGroupWoman = Object.keys(woman);
  }

  private parseCompetitionInfo({ name, date, url, members }: any): void {
    this.competitionInfo = {
      ...this.competitionInfo,
      name,
      date,
      url,
      members
    };
  }

}
