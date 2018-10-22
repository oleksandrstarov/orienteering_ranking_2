import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';

export interface PeriodicElement {
  number: number;
  name: string;
  club: string;
  points: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { number: 1, name: 'Тарануха Антон', club: 'ХНУПС', points: 9.12 },
  { number: 2, name: 'Коновалов Олексій', club: 'УПС', points: 7.12 },
  { number: 3, name: 'Сергей Степаненко', club: 'ХПИ', points: 11.12 }
];

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  displayedColumns: string[] = ['number', 'name', 'club', 'points'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }
}
