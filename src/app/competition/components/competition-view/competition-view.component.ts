import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CompetitionViewService } from '../../../core/api/competition-view/competition-view.service';

@Component({
  selector: 'app-competition-view',
  templateUrl: './competition-view.component.html',
  styleUrls: ['./competition-view.component.css']
})
export class CompetitionViewComponent implements OnInit {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private service: CompetitionViewService
  ) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    // this.service.getStats(this.id).subscribe(
    //   res => {
    //
    //   }
    // );
  }

}
