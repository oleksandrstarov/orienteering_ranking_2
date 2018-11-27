import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

import { environment } from '../../../../environments/environment';
import { RunnerResultsModel } from '../../../shared/models/runner-results.model';
import { LOCALIZATION_SETTINGS } from '../../../shared/const/localization-settings.const';

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
          runnerResults: this.getRunnerResults(res.results),
          runnerStats: this.getRunnerStats(res.stats)
        }))
      );
  }

  private getRunnerResults(data: any[]): RunnerResultsModel[] {
    return data.map(el => (
      new RunnerResultsModel({
        date: new Date(el.DATE),
        name: el.NAME || 'Субьективные',
        competition: el.COMPETITION,
        group: el.GROUP,
        time: el.TIME,
        place: el.PLACE,
        points: el.POINTS,
        actualResult: el.ACT_RESULT
      })
    ));
  }

  private getRunnerStats(data: any[]): any {
    return data.reduce((memo, { ENTRY_DATE: date, PLACE: place, POINTS: point }) => {
      memo.date.push(moment(new Date(date)).locale(LOCALIZATION_SETTINGS.language).format(LOCALIZATION_SETTINGS.dateFormat));
      memo.points.push(point);
      memo.places.push(place);
      return memo;
    }, {
      date: [],
      points: [],
      places: []
    });
  }
}
