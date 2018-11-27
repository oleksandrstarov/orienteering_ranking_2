import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { environment } from '../../../../environments/environment';
import { RatingService } from './rating.service';

describe('RatingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RatingService]
    });
  });

  it('should get users',
    inject([HttpTestingController, RatingService], (httpMock: HttpTestingController, ratingService: RatingService) => {
      const mockAllRunners = {
        man: [
          {
            CUR_PLACE: 1,
            CUR_RANK: 9.52,
            FULLNAME: 'Андрей',
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
            FULLNAME: 'Вадим',
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
        woman: [
          {
            CUR_PLACE: 1,
            CUR_RANK: 9.18,
            FULLNAME: 'Юлія',
            ID: 1206,
            PLACE: null,
            PLACE_DIFF: null,
            POINTS: null,
            POINTS_DIFF: null,
            SEX: 'W',
            SUBJECTIVE: 'Y',
            TEAM: 'КСО ОРІЄНТИР М.СУМИ'
          },
          {
            CUR_PLACE: 2,
            CUR_RANK: 9.4,
            FULLNAME: 'Виктория',
            ID: 1142,
            PLACE: null,
            PLACE_DIFF: null,
            POINTS: null,
            POINTS_DIFF: null,
            SEX: 'W',
            SUBJECTIVE: 'Y',
            TEAM: 'КСО О-КОМПАС'
          }
        ]
      };

      ratingService.getAllRunners().subscribe((res: any) => {
        expect(res.runnersMan[0].currentPlace).toBe(1);
        expect(res.runnersWoman[1].team).toBe('КСО О-КОМПАС');
      });

      const mockReq = httpMock.expectOne(`${environment.baseURL}/runners`);
      mockReq.flush(mockAllRunners);
      httpMock.verify();
    }));
});
