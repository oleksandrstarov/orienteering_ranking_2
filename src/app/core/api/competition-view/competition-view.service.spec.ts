import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { environment } from '../../../../environments/environment';
import { CompetitionViewService } from './competition-view.service';

describe('CompetitionViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompetitionViewService]
    });
  });

  it('should get getStats',
    inject([HttpTestingController, CompetitionViewService],
      (httpMock: HttpTestingController, competitionViewService: CompetitionViewService) => {
        const id = 1086;
        const mockRunnerStats = {
          details: [
            {
              DATE: '2018-11-09T22:00:00.000Z',
              ID: 1086,
              IS_ALLOWED: 'Y',
              NAME: 'Нічний привид 2018',
              STATUS: 'IMPORTED',
              TYPE: 'MEOS',
              URL: 'http://orienteering.kh.ua'
            }
          ],
          results: [
            {
              COMPETITION: 1086,
              COMP_GROUP: 'M21E',
              DATE: '2018-11-08T22:00:00.000Z',
              DISTANCE: 'MIDDLE',
              ID: 2557,
              NAME: 'Валентин',
              PLACE: 1,
              POINTS: 10.2,
              RUNNER: 1066,
              TIME: '43:37',
              TIME_BEHIND: ''
            },
            {
              COMPETITION: 1086,
              COMP_GROUP: 'M21E',
              DATE: '2018-11-08T22:00:00.000Z',
              DISTANCE: 'MIDDLE',
              ID: 2558,
              NAME: 'Сергій',
              PLACE: 2,
              POINTS: 13.8,
              RUNNER: 1179,
              TIME: '45:51',
              TIME_BEHIND: '+2:14'
            },
            {
              COMPETITION: 1086,
              COMP_GROUP: 'Ж21Е',
              DATE: '2018-11-08T22:00:00.000Z',
              DISTANCE: 'MIDDLE',
              ID: 2597,
              NAME: 'Олена',
              PLACE: 6,
              POINTS: 37.29,
              RUNNER: 1211,
              TIME: '1:08:06',
              TIME_BEHIND: '+22:34'
            },
            {
              COMPETITION: 1086,
              COMP_GROUP: 'Ж21Е',
              DATE: '2018-11-08T22:00:00.000Z',
              DISTANCE: 'MIDDLE',
              ID: 2598,
              NAME: 'Дар’я',
              PLACE: 7,
              POINTS: 48.64,
              RUNNER: 1212,
              TIME: '1:16:03',
              TIME_BEHIND: '+30:31'
            }
          ]
        };

        competitionViewService.getStats(id).subscribe((res: any) => {
          expect(res.man['M21E'].length).toBe(2);
          expect(res.man['M21E'][0].name).toBe('Валентин');
          expect(res.woman['Ж21Е'].length).toBe(2);
          expect(res.woman['Ж21Е'][0].name).toBe('Олена');
        });

        const mockReq = httpMock.expectOne(`${environment.baseURL}/competitions/${id}`);
        mockReq.flush(mockRunnerStats);
        httpMock.verify();
      }
    )
  );

  it('should get CompetitionInfo',
    inject([HttpTestingController, CompetitionViewService],
      (httpMock: HttpTestingController, competitionViewService: CompetitionViewService) => {
        const id = 1086;
        const mockRunnerStats = {
          details: [
            {
              DATE: '2018-11-09T22:00:00.000Z',
              ID: 1086,
              IS_ALLOWED: 'Y',
              NAME: 'Нічний привид 2018',
              STATUS: 'IMPORTED',
              TYPE: 'MEOS',
              URL: 'http://orienteering.kh.ua'
            }
          ],
          results: [
            {
              COMPETITION: 1086,
              COMP_GROUP: 'M21E',
              DATE: '2018-11-08T22:00:00.000Z',
              DISTANCE: 'MIDDLE',
              ID: 2557,
              NAME: 'Валентин',
              PLACE: 1,
              POINTS: 10.2,
              RUNNER: 1066,
              TIME: '43:37',
              TIME_BEHIND: ''
            },
            {
              COMPETITION: 1086,
              COMP_GROUP: 'M21E',
              DATE: '2018-11-08T22:00:00.000Z',
              DISTANCE: 'MIDDLE',
              ID: 2558,
              NAME: 'Сергій',
              PLACE: 2,
              POINTS: 13.8,
              RUNNER: 1179,
              TIME: '45:51',
              TIME_BEHIND: '+2:14'
            },
            {
              COMPETITION: 1086,
              COMP_GROUP: 'Ж21Е',
              DATE: '2018-11-08T22:00:00.000Z',
              DISTANCE: 'MIDDLE',
              ID: 2597,
              NAME: 'Олена',
              PLACE: 6,
              POINTS: 37.29,
              RUNNER: 1211,
              TIME: '1:08:06',
              TIME_BEHIND: '+22:34'
            },
            {
              COMPETITION: 1086,
              COMP_GROUP: 'Ж21Е',
              DATE: '2018-11-08T22:00:00.000Z',
              DISTANCE: 'MIDDLE',
              ID: 2598,
              NAME: 'Дар’я',
              PLACE: 7,
              POINTS: 48.64,
              RUNNER: 1212,
              TIME: '1:16:03',
              TIME_BEHIND: '+30:31'
            }
          ]
        };

        competitionViewService.getCompetitionInfo(id).subscribe((res: any) => {
          expect(res.members).toBe(4);
          expect(res.url).toBe('http://orienteering.kh.ua');
        });

        const mockReq = httpMock.expectOne(`${environment.baseURL}/competitions/${id}`);
        mockReq.flush(mockRunnerStats);
        httpMock.verify();
      }
    )
  );
});
