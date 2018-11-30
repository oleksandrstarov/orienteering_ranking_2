import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { environment } from '../../../../environments/environment';
import { RunnerDetailsService } from './runner-details.service';

describe('RunnerDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RunnerDetailsService]
    });
  });

  it('should get users',
    inject([HttpTestingController, RunnerDetailsService], (httpMock: HttpTestingController, runnerDetailsService: RunnerDetailsService) => {
      const id = 1101;
      const mockRunnerStats = {
        details: [
          {
            BIRTH_DATE: '',
            CUR_RANK: 9.52,
            FULLNAME: 'Андрей',
            ID: 1101,
            PLACE: 1,
            SEX: 'M',
            TEAM: 'КСО КОМПАС'
          }
        ],
        results: [
          {
            ACT_RESULT: 'C',
            COMPETITION: 1084,
            COMP_RESULT: 1,
            DATE: '2018-10-11T21:00:00.000Z',
            DISTANCE: 'MIDDLE',
            GROUP: 'M21E',
            ID: 2053,
            NAME: 'Осенний этап Лиги О-Компас',
            PLACE: 1,
            POINTS: 7.81,
            RUNNER: 1101,
            TIME: '00:58:14',
            TIME_BEHIND: ''
          },
          {
            ACT_RESULT: 'C',
            COMPETITION: 1085,
            COMP_RESULT: 1,
            DATE: '2018-11-01T22:00:00.000Z',
            DISTANCE: 'MIDDLE',
            GROUP: 'M21E',
            ID: 2274,
            NAME: 'Чемпионат Харьковской области',
            PLACE: 2,
            POINTS: 9.31,
            RUNNER: 1101,
            TIME: '00:49:32',
            TIME_BEHIND: '+0:15'
          }
        ],
        stats: [
          {
            ENTRY_DATE: '2018-10-12T21:00:00.000Z',
            PLACE: 2,
            POINTS: 9.64
          },
          {
            ENTRY_DATE: '2018-10-18T21:00:00.000Z',
            PLACE: 2,
            POINTS: 9.64
          }
        ]
      };

      runnerDetailsService.getRunnerDetails(id).subscribe((res: any) => {
        expect(res.rank).toBe(9.52);
        expect(res.runnerResults.length).toBe(2);
        expect(res.runnerStats.date.length).toBe(2);
        expect(res.runnerStats.places.length).toBe(2);
        expect(res.runnerStats.points.length).toBe(2);
        expect(res.runnerResults[0].time).toBe('00:58:14');
        expect(res.runnerStats.date[0]).toBe('2018-10-13');
      });

      const mockReq = httpMock.expectOne(`${environment.baseURL}/runners/${id}`);
      mockReq.flush(mockRunnerStats);
      httpMock.verify();
    }));
});
