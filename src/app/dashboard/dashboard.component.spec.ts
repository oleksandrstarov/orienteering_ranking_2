import { MatCardModule, MatIconModule, MatProgressSpinnerModule, MatTableModule } from '@angular/material';
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { MockProvider } from 'ngx-mock-provider';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from '../core/api/dashboard/dashboard.service';
import { AttendersModel } from '../shared/models/attenders.model';
import { LeaderModel } from '../shared/models/leader.model';
import { NoviceModel } from '../shared/models/novice.model';
import { PreloaderComponent } from '../shared/components/preloader/preloader.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  const mockStats = {
    topMan: [
      new LeaderModel({
        duration: 10,
        fullName: 'test name man one',
        id: 1
      }),
      new LeaderModel({
        duration: 20,
        fullName: 'test name men two',
        id: 2
      })
    ],
    topWoman: [
      new LeaderModel({
        duration: 30,
        fullName: 'test name woman one',
        id: 3
      }),
      new LeaderModel({
        duration: 40,
        fullName: 'test name women two',
        id: 4
      })
    ],
    attenders: [
      new AttendersModel({
        amount: 50,
        fullName: 'test attender one',
        id: 5,
        period: 'A'
      }),
      new AttendersModel({
        amount: 60,
        fullName: 'test attender two',
        id: 6,
        period: 'Y'
      })
    ],
    novices: [
      new NoviceModel({
        fullName: 'test novices one',
        currentPlace: 70,
        id: 7,
        place: 7,
        placeDiff: 7
      }),
      new NoviceModel({
        fullName: 'test novices two',
        currentPlace: 80,
        id: 8,
        place: 8,
        placeDiff: 8
      })
    ],
    runnersUp: [
      new NoviceModel({
        fullName: 'test novices three',
        currentPlace: 90,
        id: 9,
        place: 9,
        placeDiff: 9
      }),
      new NoviceModel({
        fullName: 'test novices three',
        currentPlace: 100,
        id: 10,
        place: 10,
        placeDiff: 10
      })
    ],
    runnersDown: [
      new NoviceModel({
        fullName: 'test novices three',
        currentPlace: 110,
        id: 11,
        place: 11,
        placeDiff: 11
      }),
      new NoviceModel({
        fullName: 'test novices three',
        currentPlace: 120,
        id: 12,
        place: 12,
        placeDiff: 12
      })
    ]
  };
  const mockInfo = {
    activeRunners: '76',
    lastStart: '12-12-18',
    moreThenSixStarts: '4',
    scoringDate: '11-10-18',
    totalRunners: '7',
    totalStarts: '88',
    yearStarts: '12'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        PreloaderComponent
      ],
      imports: [
        MatTableModule,
        MatCardModule,
        MatIconModule,
        MatProgressSpinnerModule
      ],
      providers: [
        MockProvider({
          provider: DashboardService,
          overwrite: {
            getStats(): Observable<any> {
              return of(mockStats);
            },
            getInfo(): Observable<any> {
              return of(mockInfo);
            }
          }
        })
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should call getStats and save data', inject([DashboardService], (service: DashboardService) => {
    spyOn(service, 'getStats').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit();

    expect(service.getStats).toHaveBeenCalled();

    expect(component.topMan.length).toBe(2);
    expect(component.topMan[0].id).toBe(1);
    expect(component.topMan[0].fullName).toBe('test name man one');
    expect(component.topMan[0].duration).toBe(10);

    expect(component.topWoman.length).toBe(2);
    expect(component.topWoman[0].id).toBe(3);
    expect(component.topWoman[0].fullName).toBe('test name woman one');
    expect(component.topWoman[0].duration).toBe(30);

    expect(component.attendersAllTime.length).toBe(1);
    expect(component.attendersAllTime[0].id).toBe(5);
    expect(component.attendersAllTime[0].amount).toBe(50);
    expect(component.attendersAllTime[0].fullName).toBe('test attender one');
    expect(component.attendersAllTime[0].period).toBe('A');

    expect(component.attendersYearly.length).toBe(1);
    expect(component.attendersYearly[0].id).toBe(6);
    expect(component.attendersYearly[0].amount).toBe(60);
    expect(component.attendersYearly[0].fullName).toBe('test attender two');
    expect(component.attendersYearly[0].period).toBe('Y');

    expect(component.novices.length).toBe(2);
    expect(component.novices[0].id).toBe(7);

    expect(component.runnersUp.length).toBe(2);
    expect(component.runnersUp[0].id).toBe(9);

    expect(component.runnersDown.length).toBe(2);
    expect(component.runnersDown[0].id).toBe(11);
  }));

  it('should call getInfo and save data', inject([DashboardService], (service: DashboardService) => {
    spyOn(service, 'getInfo').and.callThrough();
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.ngOnInit();

    expect(service.getInfo).toHaveBeenCalled();

    expect(component.dashboardInfo.activeRunners).toBe('76');
    expect(component.dashboardInfo.lastStart).toBe('12-12-18');
    expect(component.dashboardInfo.moreThenSixStarts).toBe('4');
    expect(component.dashboardInfo.scoringDate).toBe('11-10-18');
    expect(component.dashboardInfo.totalRunners).toBe('7');
    expect(component.dashboardInfo.totalStarts).toBe('88');
    expect(component.dashboardInfo.yearStarts).toBe('12');
  }));

});
