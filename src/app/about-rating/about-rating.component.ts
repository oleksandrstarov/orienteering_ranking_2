import { Component, OnInit } from '@angular/core';

import { AboutService } from '../core/api/about/about.service';
import { MATERIAL_VARIABLES } from '../shared/const/material-variables.const';

@Component({
  selector: 'app-about-rating',
  templateUrl: './about-rating.component.html',
  styleUrls: ['./about-rating.component.scss']
})
export class AboutRatingComponent implements OnInit {
  data: any;
  readonly matVars = MATERIAL_VARIABLES;
  constructor(private service: AboutService) {
  }

  ngOnInit(): void {
    this.service.getGroups()
      .subscribe(res => this.data = res);
  }
}
