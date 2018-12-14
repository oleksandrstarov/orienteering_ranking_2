import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { MatDialog } from '@angular/material';

import { RatingService } from '../../../core/api/rating/rating.service';
import { RunnerDetailsModel } from '../../../shared/models/runner-details.model';

@Component({
  selector: 'app-runner-compare',
  templateUrl: './runner-compare.component.html',
  styleUrls: ['./runner-compare.component.scss']
})
export class RunnerCompareComponent implements OnInit {
  @Input() currentRunnerDetails: RunnerDetailsModel;
  @ViewChild('compareRunnersModal') compareRunnersModal: TemplateRef<any>;
  isLoaded = false;
  myControl = new FormControl();
  options: any[] = [];
  filteredOptions = [];
  compareRunnerDetails: any;
  averagePointsCurrrentRunner: number;
  averagePointsComparedRunner: number;
  currentRunnerWins: number;
  comparedRunnerWins: number;
  allCompetitions: number;

  constructor(private runnersService: RatingService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this.filter(value))
      )
      .subscribe(
        value => {
          if (value.length === 1) {
            this.compareRunnerDetails = value[0];
          }
          this.filteredOptions = value;
        });
  }

  compareRunners(): void {
    this.runnersService.getComparedRunners(this.currentRunnerDetails.id, this.compareRunnerDetails.id)
      .subscribe(({
                    competitionsCount,
                    pointsCurrentRunner,
                    pointsComparedRunner,
                    winsCurrentRunner,
                    winsComparedRunner
                  }) => {
        this.averagePointsCurrrentRunner = pointsCurrentRunner;
        this.averagePointsComparedRunner = pointsComparedRunner;
        this.currentRunnerWins = winsCurrentRunner;
        this.comparedRunnerWins = winsComparedRunner;
        this.allCompetitions = competitionsCount;
      });
    this.dialog.open(this.compareRunnersModal);
  }

  getRunnersForSelect(): void {
    this.runnersService.getRunnersByGender(this.currentRunnerDetails.sex, this.currentRunnerDetails.id)
      .subscribe(runners => {
        this.options = runners;
        if (this.filteredOptions.length === 0) {
          this.filteredOptions = this.options;
        }
      });
  }

  private filter(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.fullName.toLowerCase().includes(filterValue));
  }
}
