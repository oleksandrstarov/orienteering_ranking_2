import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatOptionModule
} from '@angular/material';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RunnerCompareComponent } from './runner-compare.component';
import { RatingService } from '../../../core/api/rating/rating.service';
import { RunnerRatingModel } from '../../../shared/models/runner-rating.model';
import { SharedModule } from '../../../shared/shared.module';
import { GenderEnum } from '../../../shared/enums/gender.enum';
import { RunnerDetailsModel } from '../../../shared/models/runner-details.model';

describe('RunnerCompareComponent', () => {
  let component: RunnerCompareComponent;
  let fixture: ComponentFixture<RunnerCompareComponent>;
  const runnersByGender = [
    new RunnerRatingModel({
      correction: 9.52,
      currentPlace: 2,
      currentRank: '0.31',
      fullName: 'Вадим',
      id: 1156,
      info: 'Новый спортсмен',
      place: null,
      placeDiff: null,
      points: null,
      pointsDiff: null,
      state: 'new',
      subjective: 'Y',
      team: 'ООО'
    }),
    new RunnerRatingModel({
      correction: 9.52,
      currentPlace: 3,
      currentRank: '1.11',
      fullName: 'Сергій',
      id: 1179,
      info: 'Новый спортсмен',
      place: null,
      placeDiff: null,
      points: null,
      pointsDiff: null,
      state: 'new',
      subjective: 'Y',
      team: 'КСО'
    })
  ];

  const comparedRunners = {
    competitionsCount: 3,
    pointsCurrentRunner: 19,
    pointsComparedRunner: 17,
    winsCurrentRunner: 2,
    winsComparedRunner: 1
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RunnerCompareComponent
      ],
      imports: [
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatCardModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatOptionModule,
        MatButtonModule,
        MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
      ],
      providers: [
        MockProvider({
          provider: RatingService,
          overwrite: {
            getRunnersByGender(): Observable<any> {
              return of(runnersByGender);
            },
            getComparedRunners(): Observable<any> {
              return of(comparedRunners);
            }
          }
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerCompareComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call getRunnersByGender and save data', inject([RatingService], (service: RatingService) => {
    component = fixture.componentInstance;
    component.currentRunnerDetails = <RunnerDetailsModel>{
      sex: GenderEnum.MAN,
      id: 1101
    };
    fixture.detectChanges();

    spyOn(component, 'getRunnersForSelect').and.callThrough();
    spyOn(service, 'getRunnersByGender').and.callThrough();

    component.getRunnersForSelect();

    expect(component.getRunnersForSelect).toHaveBeenCalled();
    expect(service.getRunnersByGender).toHaveBeenCalled();

    expect(component.options[0].id).toBe(1156);
    expect(component.filteredOptions[1].fullName).toBe('Сергій');
  }));

  it('should call getComparedRunners and save data', inject([RatingService], (service: RatingService) => {
    component = fixture.componentInstance;
    component.currentRunnerDetails = <RunnerDetailsModel>{
      sex: GenderEnum.MAN,
      id: 1101
    };
    component.compareRunnerDetails = <RunnerDetailsModel>{
      sex: GenderEnum.MAN,
      id: 1111
    };
    fixture.detectChanges();

    spyOn(component, 'compareRunners').and.callThrough();
    spyOn(service, 'getComparedRunners').and.callThrough();

    component.compareRunners();

    expect(component.compareRunners).toHaveBeenCalled();
    expect(service.getComparedRunners).toHaveBeenCalled();

    expect(component.averagePointsCurrrentRunner).toBe(19);
    expect(component.currentRunnerWins).toBe(2);
  }));

  it('should call valueChanges and filter to show data', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.options = [
      new RunnerRatingModel({
        correction: 9.52,
        currentPlace: 2,
        currentRank: '0.31',
        fullName: 'Вадим',
        id: 1156,
        info: 'Новый спортсмен',
        place: null,
        placeDiff: null,
        points: null,
        pointsDiff: null,
        state: 'new',
        subjective: 'Y',
        team: 'ООО'
      }),
      new RunnerRatingModel({
        correction: 9.52,
        currentPlace: 3,
        currentRank: '1.11',
        fullName: 'Антон',
        id: 1179,
        info: 'Новый спортсмен',
        place: null,
        placeDiff: null,
        points: null,
        pointsDiff: null,
        state: 'new',
        subjective: 'Y',
        team: 'КСО'
      })
    ];
    component.myControl.setValue('АнТон');

    expect(component.filteredOptions.length).toBe(1);
    expect(component.filteredOptions[0].fullName).toBe('Антон');
  });
});
