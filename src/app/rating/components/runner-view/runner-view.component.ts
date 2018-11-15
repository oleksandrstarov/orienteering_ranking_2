import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { RunnerDetailsService } from '../../../core/api/runner-details/runner-details.service';
import { RunnerDetailsModel } from '../../../shared/models/runner-details.model';
import { DISPLAYED_COLUMNS } from '../../../shared/const/displayed-columns.const';
import { CHART_COLOR_SETTINGS } from '../../../shared/const/chart-color-settings.const';
import { CHART_OPTIONS } from '../../../shared/const/chart-options.const';

@Component({
  selector: 'app-runner-view',
  templateUrl: './runner-view.component.html',
  styleUrls: ['./runner-view.component.scss']
})
export class RunnerViewComponent implements OnInit {
  id: number;
  runnerDetails: any;
  runnerResults: any;
  chartColors: any[] = CHART_COLOR_SETTINGS;
  chartOptions = CHART_OPTIONS;
  chartData = [
    { data: [], label: 'Очки', yAxisID: 'points' },
    { data: [], label: 'Место', yAxisID: 'places' }
  ];
  chartLabels = [];
  readonly displayedColumns = DISPLAYED_COLUMNS.runnerResults;

  constructor(private route: ActivatedRoute, private service: RunnerDetailsService) {
  }

  ngOnInit(): void {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get('id'), 10);
    this.service.getRunnerDetails(this.id)
      .subscribe(({ birth, rank, name, id, place, allStarts, team, runnerResults, runnerStats }) => {
        this.runnerDetails = new RunnerDetailsModel({
          ...this.runnerDetails,
          birth,
          rank,
          name,
          id,
          place,
          allStarts,
          team
        });
        this.runnerResults = new MatTableDataSource(runnerResults);
        this.chartData[0].data = runnerStats.points;
        this.chartData[1].data = runnerStats.places;
        this.chartLabels = runnerStats.date;
      });
  }
}
