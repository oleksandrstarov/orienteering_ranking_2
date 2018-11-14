import { Component, OnInit, ViewChild } from '@angular/core';
import { delay, map } from 'rxjs/operators';
import { MatSort, MatTableDataSource } from '@angular/material';

import { CompetitionService } from '../core/api/competition/competition.service';
import { Competition } from '../shared/models/competition.model';
import { CompetitionStatus } from '../shared/enums/competition-status.enum';
import { DISPLAYED_COLUMNS } from '../shared/const/displayed-columns.const';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  competitionStatus = CompetitionStatus;
  displayedColumns: string[] = DISPLAYED_COLUMNS.competition;
  dataSource: any;
  isLoaded = false;

  constructor(private service: CompetitionService) {
  }

  ngOnInit(): void {
    this.service.getCompetitions()
      .pipe(delay(300), map(res => this.createCompetitionItems(res)))
      .subscribe(competitionItems => {
        this.dataSource = new MatTableDataSource(competitionItems);
        this.dataSource.sort = this.sort;
        this.isLoaded = true;
      });
  }

  private createCompetitionItems(competitionItems: any[]): Competition[] {
    return competitionItems.map(item =>
      new Competition({
        status: item.STATUS,
        id: item.ID,
        date: new Date(item.DATE),
        name: item.NAME,
        notes: item.NOTES,
        runners: item.RUNNERS
      })
  );
  }
}
