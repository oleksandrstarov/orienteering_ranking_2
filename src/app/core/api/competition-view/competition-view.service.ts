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
      .pipe(
        map((res: any) => this.createRunners(res.results))
      );
  }

  getCompetitionInfo(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .pipe(map((res: any) => ({
        name: res.details[0].NAME,
        date: new Date(res.details[0].DATE),
        url: res.details[0].URL,
        members: res.results.length
      })));
  }

  private createRunners(data: any[]): any {
    return data.reduce((memo, elem) => {
      const groupGender = elem.COMP_GROUP[0];
      const target = groupGender === 'Ж' ? memo.woman : memo.man;

      if (!target[elem.COMP_GROUP]) {
        target[elem.COMP_GROUP] = [];
      }
      target[elem.COMP_GROUP].push({
        group: elem.COMP_GROUP,
        date: elem.DATE,
        timeBehind: elem.TIME_BEHIND,
        name: elem.NAME,
        points: elem.POINTS,
        time: elem.TIME
      });
      return memo;
    }, {
      man: {},
      woman: {}
    });
  }
}
