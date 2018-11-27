import {
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
  MatTooltipModule, MatProgressSpinnerModule
} from '@angular/material';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RatingComponent } from './rating.component';
import { RatingService } from '../core/api/rating/rating.service';
import { PreloaderComponent } from '../shared/components/preloader/preloader.component';

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;
  const mockAllRunners = {
    runnersMan: [
      {
        currentPlace: 1,
        currentRank: 9.18,
        fullName: 'Карпенко Юлія',
        id: 1206,
        info: 'Новый спортсмен',
        place: null,
        placeDiff: null,
        points: null,
        pointsDiff: null,
        state: 'new',
        subjective: 'Y',
        team: 'КСО ОРІЄНТИР М.СУМИ'
      },
      {
        currentPlace: 2,
        currentRank: 9.4,
        fullName: 'Cухаревская Виктория',
        id: 1142,
        info: 'Новый спортсмен',
        place: null,
        placeDiff: null,
        points: null,
        pointsDiff: null,
        state: 'new',
        subjective: 'Y',
        team: 'КСО О-КОМПАС'
      }
    ],
    runnersWoman: [
      {
        currentPlace: 1,
        currentRank: 9.52,
        fullName: 'Половинко Андрей',
        id: 1101,
        info: 'Новый спортсмен',
        place: null,
        placeDiff: null,
        points: null,
        pointsDiff: null,
        state: 'new',
        subjective: 'Y',
        team: 'КСО КОМПАС'
      },
      {
        currentPlace: 2,
        currentRank: 9.83,
        fullName: 'Дяченко Вадим',
        id: 1156,
        info: 'Новый спортсмен',
        place: null,
        placeDiff: null,
        points: null,
        pointsDiff: null,
        state: 'new',
        subjective: 'Y',
        team: 'О-КОМПАС'
      }
    ]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RatingComponent,
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
        MatProgressSpinnerModule
      ],
      providers: [
        MockProvider({
          provider: RatingService,
          overwrite: {
            getAllRunners(): Observable<any> {
              return of(mockAllRunners);
            }
          }
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingComponent);
  });

  it('should create', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call getAllRunners and save data', inject([RatingService], (service: RatingService) => {
    spyOn(service, 'getAllRunners').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit();

    expect(service.getAllRunners).toHaveBeenCalled();

    expect(component.dataSourceMen.filteredData[0].state).toBe('new');
    expect(component.dataSourceWomen.filteredData[0].id).toBe(1101);
  }));

  it('should apply filter', () => {
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.showSubjectiveMan({ checked: true });
    expect(component.dataSourceMen.data.length).toBe(0);

    component.showSubjectiveWoman({ checked: true });
    expect(component.dataSourceWomen.data.length).toBe(0);

    component.showSubjectiveMan({ checked: false });
    expect(component.dataSourceMen.data.length).toBe(2);

    component.showSubjectiveWoman({ checked: false });
    expect(component.dataSourceWomen.data.length).toBe(2);

    component.applyFilterMan(' aAd ');
    expect(component.dataSourceMen.filter).toBe('aad');

    component.applyFilterWoman(' FtH ');
    expect(component.dataSourceWomen.filter).toBe('fth');
  });
});
