import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { environment } from '../../../../environments/environment';
import { CompetitionService } from './competition.service';

describe('CompetitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CompetitionService]
    });
  });

  it('should get users',
    inject([HttpTestingController, CompetitionService], (httpMock: HttpTestingController, competitionService: CompetitionService) => {
      const mockCompetitions = [
        {
          DATE: '2018-04-07T21:00:00.000Z',
          ID: 1080,
          IS_ALLOWED: 'Y',
          NAME: 'Чемпионат Харьковской области',
          NOTES: '',
          RUNNERS: 59,
          STATUS: 'IMPORTED',
          URL: 'http://orienteering.kh.ua'
        },
        {
          DATE: '2018-04-12T21:00:00.000Z',
          ID: 1081,
          IS_ALLOWED: 'Y',
          NAME: 'Малинові Джерела',
          NOTES: '',
          RUNNERS: 63,
          STATUS: 'IMPORTED',
          URL: 'http://orienteering.kh.ua/images/events/733_Protokol-rezultato'
        }
      ];

      competitionService.getCompetitions().subscribe((res: any) => {
        expect(res[0].RUNNERS).toBe(59);
        expect(res[1].NAME).toBe('Малинові Джерела');
      });

      const mockReq = httpMock.expectOne(`${environment.baseURL}/competitions`);
      mockReq.flush(mockCompetitions);
      httpMock.verify();
    }));
});
