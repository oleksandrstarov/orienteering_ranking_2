import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { finalize } from 'rxjs/operators';

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
  dataSourceMenData: MatTableDataSource<RunnerRatingModel>;
  dataSourceWomen: MatTableDataSource<RunnerRatingModel>;
  dataSourceWomenData: MatTableDataSource<RunnerRatingModel>;
  isLoaded = false;

  constructor (private service: RatingService) {

  }

  ngOnInit(): void {
    this.service.getAllRunners()
      .pipe(
        finalize(() => this.isLoaded = true)
      )
      .subscribe(({ runnersMan, runnersWoman }) => {
        this.dataSourceMen = this.dataSourceMenData = new MatTableDataSource(runnersMan);
        this.dataSourceWomen = this.dataSourceWomenData = new MatTableDataSource(runnersWoman);
        this.dataSourceMen.sort = this.dataSourceWomen.sort = this.sort;
        this.isLoaded = true;
      });
  }

  applyFilterMan(filterValue: string): void {
    this.dataSourceMen.filter = filterValue.trim().toLowerCase();
  }
  applyFilterWoman(filterValue: string): void {
    this.dataSourceWomen.filter = filterValue.trim().toLowerCase();
  }
  showSubjectiveMan(e: any): void {
    if (e.checked) {
      this.dataSourceMen = new MatTableDataSource(this.dataSourceMenData.filteredData.filter( el => el.subjective === 'N' ));
    } else {
      this.dataSourceMen = new MatTableDataSource(this.dataSourceMenData.filteredData.filter( el => el.subjective === 'Y' ));
    }
  }

  showSubjectiveWoman(e: any): void {
    if (e.checked) {
      this.dataSourceWomen = new MatTableDataSource(this.dataSourceWomenData.filteredData.filter( el => el.subjective === 'N' ));
    } else {
      this.dataSourceWomen = new MatTableDataSource(this.dataSourceWomenData.filteredData.filter( el => el.subjective === 'Y' ));
    }
  }
}
