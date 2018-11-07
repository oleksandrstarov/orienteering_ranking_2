import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { RunnerDetailsService } from '../../../core/api/runner-details/runner-details.service';
import { RunnerDetailsModel } from '../../../shared/models/runner-details.model';
import { DISPLAYED_COLUMNS } from '../../../shared/const/displayed-columns.const';

@Component({
  selector: 'app-runner-view',
  templateUrl: './runner-view.component.html',
  styleUrls: ['./runner-view.component.scss']
})
export class RunnerViewComponent implements OnInit {
  id: number;
  runnerDetails = new RunnerDetailsModel();
  runnerResults: any;
  displayedColumns = DISPLAYED_COLUMNS.runnerResults;

  constructor(
    private route: ActivatedRoute,
    private service: RunnerDetailsService
  ) {
  }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.service.getRunnerDetails(this.id)
      .subscribe(({ birth, rank, name, id, place, allStarts, team, runnerResults }) => {
        this.runnerDetails = {
          ...this.runnerDetails,
          birth,
          rank,
          name,
          id,
          place,
          allStarts,
          team
        };
        this.runnerResults = new MatTableDataSource(runnerResults);
      });
  }

}
