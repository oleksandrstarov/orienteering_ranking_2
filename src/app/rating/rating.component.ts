import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

import { ELEMENT_DATA, ELEMENT_DATA_NEW } from './local/constants/mock-runners.const';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'club', 'points'];
  dataSourceMen = new MatTableDataSource(ELEMENT_DATA);
  dataSourceWomen = new MatTableDataSource(ELEMENT_DATA_NEW);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSourceMen.sort = this.dataSourceWomen.sort = this.sort;
  }

  applyFilterMan(filterValue: string): void {
    this.dataSourceMen.filter = filterValue.trim().toLowerCase();
  }
  applyFilterWoman(filterValue: string): void {
    this.dataSourceWomen.filter = filterValue.trim().toLowerCase();
  }
}
