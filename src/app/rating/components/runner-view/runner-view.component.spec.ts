import {
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatTooltipModule
} from '@angular/material';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';

import { RunnerViewComponent } from './runner-view.component';
import { RunnerDetailsService } from '../../../core/api/runner-details/runner-details.service';
import { PreloaderComponent } from '../../../shared/components/preloader/preloader.component';

describe('RunnerViewComponent', () => {
  let component: RunnerViewComponent;
  let fixture: ComponentFixture<RunnerViewComponent>;
  const RunnerDetails = {
    allStarts: 2,
    birth: '',
    id: 1101,
    name: 'Половинко Андрей',
    place: 1,
    rank: 9.52,
    team: 'КСО КОМПАС',
    runnerResults: [
      {
        actualResult: 'C',
        competition: 1084,
        date: '2018-11-08T22:00:00.000Z',
        group: 'M21E',
        name: 'Осенний этап Лиги О-Компас. Чемпионат Харьковской области (1 день). Классика, 14.10.2018.',
        place: 1,
        points: 7.81,
        time: '00:58:14'
      },
      {
        actualResult: 'C',
        competition: 2314,
        date: '2018-11-08T22:00:00.000Z',
        group: 'M21E',
        name: 'Осенний этап Лиги О-Компас',
        place: 1,
        points: 7.81,
        time: '00:48:14'
      }
    ],
    runnerStats: {
      date: ['2018-10-13', '2018-10-19'],
      places: [2, 1],
      points: [9.64, 9.64]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RunnerViewComponent,
        PreloaderComponent
      ],
      imports: [
        MatCheckboxModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatInputModule,
        MatSortModule,
        MatTableModule,
        MatGridListModule,
        MatDividerModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatTooltipModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule,
        ChartsModule
      ],
      providers: [
        MockProvider({
          provider: RunnerDetailsService,
          overwrite: {
            getRunnerDetails(): Observable<any> {
              return of(RunnerDetails);
            }
          }
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunnerViewComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call getRunnerDetails and save data', inject([RunnerDetailsService], (service: RunnerDetailsService) => {
    spyOn(service, 'getRunnerDetails').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(service.getRunnerDetails).toHaveBeenCalled();

    expect(component.runnerDetails.id).toBe(1101);
    expect(component.runnerResults.filteredData[1].name).toBe('Осенний этап Лиги О-Компас');
  }));
});
