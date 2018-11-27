import {
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatTableModule
} from '@angular/material';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';
import { RouterTestingModule } from '@angular/router/testing';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { CompetitionViewComponent } from './competition-view.component';
import { CompetitionViewService } from '../../../core/api/competition-view/competition-view.service';
import { CompetitionViewRunnersModel } from '../../../shared/models/competition-view-runners.model';
import { PreloaderComponent } from '../../../shared/components/preloader/preloader.component';

describe('CompetitionViewComponent', () => {
  let component: CompetitionViewComponent;
  let fixture: ComponentFixture<CompetitionViewComponent>;
  const mockCompetitionInfo = {
    name: 'Нічний привид',
    date: '2018-04-07T21:00:00.000Z',
    url: 'http://orienteering.kh.ua',
    members: 123
  };
  const mockStats = {
    man: {
      M20: [
        new CompetitionViewRunnersModel({
          date: '2018-11-08T22:00:00.000Z',
          group: 'M20',
          name: 'Олександр',
          points: 17.97,
          time: '59:47',
          timeBehind: '+0:00'
        }),
        new CompetitionViewRunnersModel({
          date: '2018-11-08T22:00:00.000Z',
          group: 'M20',
          name: 'Олег',
          points: 17.97,
          time: '59:47',
          timeBehind: '+0:00'
        })
      ]
    },
    woman: {
      Ж21Е: [
        new CompetitionViewRunnersModel({
          date: '2018-11-08T22:00:00.000Z',
          group: 'Ж21Е',
          name: 'Юлія',
          points: 5.05,
          time: '45:32',
          timeBehind: '+0:00'
        }),
        new CompetitionViewRunnersModel({
          date: '2018-11-08T22:00:00.000Z',
          group: 'Ж21Е',
          name: 'Юлія',
          points: 5.05,
          time: '45:32',
          timeBehind: '+0:00'
        })
      ]
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompetitionViewComponent,
        PreloaderComponent
      ],
      imports: [
        MatTableModule,
        MatCardModule,
        MatIconModule,
        RouterTestingModule,
        MatProgressSpinnerModule,
        MatChipsModule,
        ScrollToModule.forRoot()
      ],
      providers: [
        MockProvider({
          provider: CompetitionViewService,
          overwrite: {
            getStats(): Observable<any> {
              return of(mockStats);
            },
            getCompetitionInfo(): Observable<any> {
              return of(mockCompetitionInfo);
            }
          }
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionViewComponent);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(CompetitionViewComponent);
    component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it('should call getStats and save data', inject([CompetitionViewService], (service: CompetitionViewService) => {
    spyOn(service, 'getStats').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(service.getStats).toHaveBeenCalled();
    expect(component.runnersMan[0].filteredData[0].name).toBe('Олександр');
  }));

  it('should call getCompetitionInfo and save data', inject([CompetitionViewService], (service: CompetitionViewService) => {
    spyOn(service, 'getCompetitionInfo').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(service.getCompetitionInfo).toHaveBeenCalled();
    expect(component.competitionInfo.name).toBe('Нічний привид');
  }));
});
