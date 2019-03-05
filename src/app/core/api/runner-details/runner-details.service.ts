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
          birth: res.details[0].birthDate,
          rank: res.details[0].curRank,
          name: res.details[0].fullname,
          id: res.details[0].id,
          place: res.details[0].place,
          sex: res.details[0].sex,
          allStarts: res.results.filter(el => !!el.competition).length,
          team: res.details[0].team,
          runnerResults: this.getRunnerResults(res.results),
          runnerStats: this.getRunnerStats(res.stats)
        }))
      );
  }

  private getRunnerResults(data: any[]): RunnerResultsModel[] {
    return data
      .map(el => {
        el.date = new Date(el.date);
        el.name = el.name || 'Субьективные';
        el.time = (el.time === '00:00:00') ? '' : el.time;
        el.place = (el.place < 1) ? '' : el.place;
        return el;
      });
  }

  private getRunnerStats(data: any[]): any {
    return data.reduce((memo, { entryDate, place, points }) => {
      memo.date.push(moment(new Date(entryDate)).locale(LOCALIZATION_SETTINGS.language).format(LOCALIZATION_SETTINGS.dateFormat));
      memo.points.push(points);
      memo.places.push(place);
      return memo;
    }, {
      date: [],
      points: [],
      places: []
    });
  }
}
