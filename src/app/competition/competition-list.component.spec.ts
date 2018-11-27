import {
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompetitionListComponent } from './competition-list.component';
import { CompetitionService } from '../core/api/competition/competition.service';
import { PreloaderComponent } from '../shared/components/preloader/preloader.component';

describe('CompetitionListComponent', () => {
  let component: CompetitionListComponent;
  let fixture: ComponentFixture<CompetitionListComponent>;
  const mockCompetitions = [
    {
      DATE: '2018-04-07T21:00:00.000Z',
      ID: 1,
      IS_ALLOWED: 'Y',
      NAME: 'Чемпионат Харьковской области',
      NOTES: '',
      RUNNERS: 142,
      STATUS: 'IMPORTED',
      URL: 'http://orienteering.kh.ua'
    },
    {
      DATE: '2018-04-07T21:00:00.000Z',
      ID: 2,
      IS_ALLOWED: 'Y',
      NAME: 'Чемпионат',
      NOTES: '',
      RUNNERS: 59,
      STATUS: 'VALID',
      URL: 'http://orienteering.kh.ua'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompetitionListComponent,
        PreloaderComponent
      ],
      imports: [
        MatTableModule,
        MatCardModule,
        MatIconModule,
        MatSortModule,
        RouterModule,
        BrowserAnimationsModule,
        MatProgressSpinnerModule
      ],
      providers: [
        MockProvider({
          provider: CompetitionService,
          overwrite: {
            getCompetitions(): Observable<any> {
              return of(mockCompetitions);
            }
          }
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionListComponent);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CompetitionListComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should call getCompetitions and save data', inject([CompetitionService], (service: CompetitionService) => {
    spyOn(service, 'getCompetitions').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(service.getCompetitions).toHaveBeenCalled();
    expect(component.dataSource.filteredData.length).toBe(2);
    expect(component.dataSource.filteredData[0].id).toBe(1);
    expect(component.dataSource.filteredData[1].name).toBe('Чемпионат');
  }));
});
