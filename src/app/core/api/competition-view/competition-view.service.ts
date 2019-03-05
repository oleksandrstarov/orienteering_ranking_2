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
        name: res.details[0].name,
        date: new Date(res.details[0].date),
        url: res.details[0].url,
        members: res.results.length
      })));
  }

  private createRunners(data: any[]): any {
    const competitors = { man: {}, woman: {} };

    return data.reduce((memo, elem) => {
      const groupGender = elem.compGroup[0];
      const target = groupGender === this.womanGroupIdentifier ? memo.woman : memo.man;

      if (!target[elem.compGroup]) {
        target[elem.compGroup] = [];
      }
      target[elem.compGroup].push(
        new CompetitionViewRunnersModel({
          group: elem.compGroup,
          date: elem.date,
          timeBehind: elem.timeBehind,
          name: elem.name,
          points: (elem.points).toFixed(2),
          time: (elem.time !== '00:00:00') ? elem.time : '-',
          runnerId: elem.runner
        }
      ));
      return memo;
    }, competitors);
  }
}
