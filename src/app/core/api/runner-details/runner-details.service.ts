import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { RunnerResultsModel } from '../../../shared/models/runner-results.model';

@Injectable({
  providedIn: 'root'
})
export class RunnerDetailsService {
  private readonly baseUrl = `${environment.baseURL}/runners`;

  constructor(private http: HttpClient) {
  }

  getRunnerDetails(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .pipe(
        map((res: any) => ({
          birth: res.details[0].BIRTH_DATE,
          rank: res.details[0].CUR_RANK,
          name: res.details[0].FULLNAME,
          id: res.details[0].ID,
          place: res.details[0].PLACE,
          allStarts: res.results.filter(el => !!el.COMPETITION).length,
          team: res.details[0].TEAM,
          runnerResults: this.getRunnerResults(res.results)
        }))
      );
  }

  private getRunnerResults(data: any[]): RunnerResultsModel[] {
    return data.map(el => (
      new RunnerResultsModel({
        date: new Date(el.DATE),
        name: el.NAME,
        competition: el.COMPETITION,
        group: el.GROUP,
        time: el.TIME,
        place: el.PLACE,
        points: el.POINTS,
        actualResult: el.ACT_RESULT
      })
    ));
  }
}
