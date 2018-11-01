import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { RunnerGenderModel } from '../../../shared/models/runner-gender.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private readonly configUrl = `${environment.baseURL}/runners`;

  constructor(private http: HttpClient) {
  }

  getRunners(): Observable<any> {
    return this.http.get(this.configUrl)
      .pipe(map((res: any) => ({
        runnersMan: this.getRunnersByGender(res.man),
        runnersWoman: this.getRunnersByGender(res.woman)
      })));
  }

  getRunnersByGender(data: any[]): RunnerGenderModel[] {
    return data
      .map(el => (
        new RunnerGenderModel({
          currentPlace: el.CUR_PLACE,
          currentRank: el.CUR_RANK,
          fullName: el.FULLNAME,
          id: el.ID,
          place: el.PLACE,
          placeDiff: el.PLACE_DIFF,
          points: el.POINTS,
          pointsDiff: el.POINTS_DIFF,
          subjective: el.SUBJECTIVE,
          team: el.TEAM
        })
      ));
  }

}
