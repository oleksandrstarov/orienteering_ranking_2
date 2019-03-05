import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { RunnerRatingModel } from '../../../shared/models/runner-rating.model';
import { GenderEnum } from '../../../shared/enums/gender.enum';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private readonly configUrl = `${environment.baseURL}/runners`;
  private readonly runnerCompareUrl = `${environment.baseURL}/runner`;

  constructor(private http: HttpClient) {
  }

  getAllRunners(): Observable<any> {
    return this.http.get(this.configUrl)
      .pipe(map((res: any) => ({
        runnersMan: this.getRunners(res.man),
        runnersWoman: this.getRunners(res.woman)
      })));
  }

  getRunnersByGender(sex: GenderEnum, runnerId: number): Observable<any> {
    return this.getAllRunners()
      .pipe(map(({ runnersMan, runnersWoman }) => {
        return (sex === GenderEnum.MAN ? runnersMan : runnersWoman).filter(runner => runner.id !== runnerId);
      }));
  }

  getComparedRunners(currentRunnerId: number, comparedRunnerId: number): Observable<any> {
    return this.http.get(`${this.runnerCompareUrl}/${currentRunnerId}/${comparedRunnerId}`)
      .pipe(map((res: any[]) => this.calculateStatistic(res)));
  }

  private calculateStatistic(data: any[]): any {
    const compareRunners = {
      competitionsCount: 0,
      pointsCurrentRunner: '',
      pointsComparedRunner: '',
      winsCurrentRunner: 0,
      winsComparedRunner: 0
    };
    let pointsCurrentRunnerAcc = 0;
    let pointsComparedRunnerAcc = 0;

    data.forEach(el => {
      pointsCurrentRunnerAcc += el.points;
      pointsComparedRunnerAcc += el.opponentPoints;
      el.place > el.opponentPlace ? compareRunners.winsCurrentRunner++ : compareRunners.winsComparedRunner++;
    });

    compareRunners.competitionsCount = data.length;
    compareRunners.pointsCurrentRunner = (pointsCurrentRunnerAcc / data.length).toFixed(2);
    compareRunners.pointsComparedRunner = (pointsComparedRunnerAcc / data.length).toFixed(2);

    return compareRunners;
  }

  private getRunners(data: any[]): RunnerRatingModel[] {
    return data
      .map(el => {
        el.currentRank = (el.curRank - data[0].curRank).toFixed(2);
        el.correction = data[0].curRank;
        return el;
      });
  }
}
