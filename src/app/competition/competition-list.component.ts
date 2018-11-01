import { Component, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatSort, MatTableDataSource } from '@angular/material';

import { CompetitionService } from '../core/api/competition/competition.service';
import { Competition } from '../shared/models/competition.model';
import { CompetitionStatus } from '../shared/enums/competition-status.enum';

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.scss']
})
export class CompetitionListComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  competitionStatus = CompetitionStatus;
  displayedColumns: string[] = ['status', 'date', 'name', 'notes', 'runners'];
  dataSource: any;

  constructor(private service: CompetitionService) {
  }

  ngOnInit(): void {
    this.service.getCompetitions()
      .pipe(map(res => this.createCompetitionItems(res)))
      .subscribe(competitionItems => {
        this.dataSource = new MatTableDataSource(competitionItems);
        this.dataSource.sort = this.sort;
      });
  }

  private createCompetitionItems(competitionItems: any[]): Competition[] {
    return competitionItems.map(item =>
      new Competition({
        status: item.STATUS,
        date: new Date(item.DATE),
        name: item.NAME,
        notes: item.NOTES,
        runners: item.RUNNERS
      })
  );
  }
}
