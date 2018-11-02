import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionViewService {
  private readonly baseUrl = `${environment.baseURL}/competitions`;

  constructor(private http: HttpClient) {
  }

  getStats(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .pipe(map((res: any) => ({
        competitionDetails: res.details[0]
      })));
  }
}
