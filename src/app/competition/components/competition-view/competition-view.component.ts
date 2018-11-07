import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { CompetitionViewService } from '../../../core/api/competition-view/competition-view.service';
import { CompetitionInfoModel } from '../../../shared/models/competition-info.model';
import { DISPLAYED_COLUMNS } from '../../../shared/const/displayed-columns.const';

@Component({
  selector: 'app-competition-view',
  templateUrl: './competition-view.component.html',
  styleUrls: ['./competition-view.component.css']
})
export class CompetitionViewComponent implements OnInit {
  id: number;
  competitionInfo = new CompetitionInfoModel();
  runnersMan = [];
  runnersGroupMan = [];
  runnersWoman = [];
  runnersGroupWoman = [];
  displayedColumns: string[] = DISPLAYED_COLUMNS.singleCompetition;

  constructor( private route: ActivatedRoute, private service: CompetitionViewService ) {

  }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);

    this.service.getStats(this.id).subscribe(
      ({ man, woman }) => {
        this.runnersMan = Object.values(man).map((el: any[]) => new MatTableDataSource(el));
        this.runnersGroupMan = Object.keys(man);
        this.runnersWoman = Object.values(woman).map((el: any[]) => new MatTableDataSource(el));
        this.runnersGroupWoman = Object.keys(woman);
      }
    );

    this.service.getCompetitionInfo(this.id)
      .subscribe(({ name, date, url, members }) => {
        this.competitionInfo = {
          ...this.competitionInfo,
          name,
          date,
          url,
          members
        };
      });
  }

}
