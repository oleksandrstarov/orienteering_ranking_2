import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { RunnerRatingModel } from '../../../shared/models/runner-rating.model';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private readonly configUrl = `${environment.baseURL}/runners`;

  constructor(private http: HttpClient) {
  }

  getAllRunners(): Observable<any> {
    return this.http.get(this.configUrl)
      .pipe(map((res: any) => ({
        runnersMan: this.getRunners(res.man),
        runnersWoman: this.getRunners(res.woman)
      })));
  }

  getRunners(data: any[]): RunnerRatingModel[] {
    return data
      .map(el => (
        new RunnerRatingModel({
          currentPlace: el.CUR_PLACE,
          currentRank: (el.CUR_RANK - data[0].CUR_RANK).toFixed(2),
          fullName: el.FULLNAME,
          id: el.ID,
          place: el.PLACE,
          placeDiff: el.PLACE_DIFF,
          points: el.POINTS,
          pointsDiff: el.POINTS_DIFF,
          subjective: el.SUBJECTIVE,
          team: el.TEAM,
          correction: data[0].CUR_RANK
        })
      ));
  }

}
