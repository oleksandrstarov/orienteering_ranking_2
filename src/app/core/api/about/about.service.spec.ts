import { TestBed, inject } from '@angular/core/testing';
import {
HttpClientTestingModule,
HttpTestingController
} from '@angular/common/http/testing';

import { environment } from '../../../../environments/environment';
import { AboutService } from './about.service';

describe('AboutService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AboutService]
    });
  });

  it('should get users',
    inject([HttpTestingController, AboutService], (httpMock: HttpTestingController, aboutService: AboutService) => {
      const mockUsers = [
        {
          name: 'M21E',
          points: 10
        },
        {
          name: 'M20',
          points: 14
        }
      ];

      aboutService.getGroups().subscribe((res: any) => {
        expect(res[0].name).toBe('M21E');
        expect(res[1].points).toBe(14);
      });

      const mockReq = httpMock.expectOne(`${environment.baseURL}/about`);
      mockReq.flush(mockUsers);
      httpMock.verify();
    }));
});
