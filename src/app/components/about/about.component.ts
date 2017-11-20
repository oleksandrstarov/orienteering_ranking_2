import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  groups = 'Загрузка...';
  showInfo = false;


  constructor() { }

  ngOnInit() {
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }
}
