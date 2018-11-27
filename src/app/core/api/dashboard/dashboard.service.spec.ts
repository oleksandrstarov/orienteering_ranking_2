import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { environment } from '../../../../environments/environment';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DashboardService]
    });
  });

  it('should get getStats',
    inject([HttpTestingController, DashboardService], (httpMock: HttpTestingController, dashboardService: DashboardService) => {
      const mockRunnerStats = {
        stats: {
          attenders: [
            {
              AMOUNT: 4,
              FULLNAME: 'Скомороха Максим',
              ID: 1027,
              PERIOD: 'A'
            },
            {
              AMOUNT: 4,
              FULLNAME: 'Пичугин Дмитрий',
              ID: 1020,
              PERIOD: 'A'
            }
          ],
          leaders: [
            {
              DURATION: 3.4286,
              FULLNAME: 'Половинко Андрей',
              ID: 1101,
              PLACE: 1,
              POINTS: 9.52,
              SEX: 'M'
            },
            {
              DURATION: 2.5714,
              FULLNAME: 'Дяченко Вадим',
              ID: 1156,
              PLACE: 2,
              POINTS: 9.83,
              SEX: 'M'
            }
          ],
          progress: {
            down: [],
            novices: [
              {
                CUR_PLACE: 1,
                CUR_RANK: 9.52,
                FULLNAME: 'Половинко Андрей',
                ID: 1101,
                PLACE: null,
                PLACE_DIFF: null,
                POINTS: null,
                POINTS_DIFF: null,
                SEX: 'M',
                SUBJECTIVE: 'Y',
                TEAM: 'КСО КОМПАС'
              },
              {
                CUR_PLACE: 2,
                CUR_RANK: 9.83,
                FULLNAME: 'Дяченко Вадим',
                ID: 1156,
                PLACE: null,
                PLACE_DIFF: null,
                POINTS: null,
                POINTS_DIFF: null,
                SEX: 'M',
                SUBJECTIVE: 'Y',
                TEAM: 'О-КОМПАС'
              }
            ],
            up: []
          },
          simpleStats: ['217', '217', '0', '87', '9', '11-11-2018', '25-11-2018', 'Скомороха Максим']
        }
      };

      dashboardService.getStats().subscribe((res: any) => {
        expect(res.attenders.length).toBe(2);
        expect(res.novices[0].id).toBe(1101);
        expect(res.topMan[0].sex).toBe('M');
      });

      const mockReq = httpMock.expectOne(`${environment.baseURL}/stats`);
      mockReq.flush(mockRunnerStats);
      httpMock.verify();
    }));

  it('should get getInfo',
    inject([HttpTestingController, DashboardService], (httpMock: HttpTestingController, dashboardService: DashboardService) => {
      const mockInfo = {
        activeRunners: '217',
        lastStart: '11-11-18',
        moreThenSixStarts: '0',
        novices: [
          {
            CUR_PLACE: 1,
            CUR_RANK: 9.52,
            FULLNAME: 'Половинко Андрей',
            ID: 1101,
            PLACE: null,
            PLACE_DIFF: null,
            POINTS: null,
            POINTS_DIFF: null,
            SEX: 'M',
            SUBJECTIVE: 'Y',
            TEAM: 'КСО КОМПАС'
          },
          {
            CUR_PLACE: 2,
            CUR_RANK: 9.83,
            FULLNAME: 'Дяченко Вадим',
            ID: 1156,
            PLACE: null,
            PLACE_DIFF: null,
            POINTS: null,
            POINTS_DIFF: null,
            SEX: 'M',
            SUBJECTIVE: 'Y',
            TEAM: 'О-КОМПАС'
          }
        ],
        ratingDown: [],
        ratingUp: [],
        scoringDate: '25-11-18',
        totalRunners: '217',
        totalStarts: '87',
        yearStarts: '9'
      };

      dashboardService.getInfo().subscribe((res: any) => {
        expect(res.activeRunners).toBe('217');
        expect(res.novices.length).toBe(2);
      });

      const mockReq = httpMock.expectOne(`${environment.baseURL}/stats/dashboard-info`);
      mockReq.flush(mockInfo);
      httpMock.verify();
    }));
});
