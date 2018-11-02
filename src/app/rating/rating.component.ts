import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { RatingService } from '../core/api/rating/rating.service';
import { RunnerRatingModel } from '../shared/models/runner-rating.model';
import { DISPLAYED_COLUMNS } from '../shared/const/displayed-columns.const';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  readonly displayedColumns: string[] = DISPLAYED_COLUMNS.rating;
  dataSourceMen: MatTableDataSource<RunnerRatingModel>;
  dataSourceWomen: MatTableDataSource<RunnerRatingModel>;

  constructor (private service: RatingService) {

  }

  ngOnInit(): void {
    this.service.getAllRunners()
      .subscribe(({ runnersMan, runnersWoman }) => {
        this.dataSourceMen = new MatTableDataSource(runnersMan);
        this.dataSourceWomen = new MatTableDataSource(runnersWoman);
        this.dataSourceMen.sort = this.dataSourceWomen.sort = this.sort;
      });
  }

  applyFilterMan(filterValue: string): void {
    this.dataSourceMen.filter = filterValue.trim().toLowerCase();
  }
  applyFilterWoman(filterValue: string): void {
    this.dataSourceWomen.filter = filterValue.trim().toLowerCase();
  }
}
