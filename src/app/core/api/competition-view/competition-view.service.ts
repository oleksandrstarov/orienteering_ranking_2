import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { CompetitionViewRunnersModel } from '../../../shared/models/competition-view-runners.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionViewService {
  private readonly baseUrl = `${environment.baseURL}/competitions`;
  private readonly womanGroupIdentifier = 'Ж';

  constructor(private http: HttpClient) {}

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
    const competitors = { man: {}, woman: {} };

    return data.reduce((memo, elem) => {
      const groupGender = elem.COMP_GROUP[0];
      const target = groupGender === this.womanGroupIdentifier ? memo.woman : memo.man;

      if (!target[elem.COMP_GROUP]) {
        target[elem.COMP_GROUP] = [];
      }
      target[elem.COMP_GROUP].push(
        new CompetitionViewRunnersModel({
          group: elem.COMP_GROUP,
          date: elem.DATE,
          timeBehind: elem.TIME_BEHIND,
          name: elem.NAME,
          points: (elem.POINTS).toFixed(2),
          time: (elem.TIME !== '00:00:00') ? elem.TIME : '-',
          runnerId: elem.RUNNER
        })
      );
      return memo;
    }, competitors);
  }
}
