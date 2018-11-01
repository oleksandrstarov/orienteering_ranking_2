import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { RatingService } from '../core/api/rating/rating.service';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['number', 'name', 'club', 'points'];
  dataSourceMen: any;
  dataSourceWomen: any;

  constructor (private service: RatingService) {

  }

  ngOnInit(): void {

    this.service.getRunners()
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
