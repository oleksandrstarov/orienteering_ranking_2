import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { LeaderModel } from '../../../shared/models/leader.model';
import { AttendersModel } from '../../../shared/models/attenders.model';
import { NoviceModel } from '../../../shared/models/novice.model';
import { GenderEnum } from '../../../shared/enums/gender.enum';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly baseUrl = `${environment.baseURL}/stats`;
  private readonly infoUrl = `${this.baseUrl}/dashboard-info`;

  constructor(private http: HttpClient) {
  }

  getStats(): Observable<any> {
    return this.http.get(this.baseUrl)
      .pipe(map((res: any) => ({
        topMan: this.getLeaders(res.stats.leaders, GenderEnum.MAN),
        topWoman: this.getLeaders(res.stats.leaders, GenderEnum.WOMAN),
        attenders: this.getAttenders(res.stats.attenders),
        novices: this.getNovices(res.stats.progress.novices),
        runnersUp: this.getNovices(res.stats.progress.up),
        runnersDown: this.getNovices(res.stats.progress.down)
      })));
  }

  getInfo(): Observable<any> {
    return this.http.get(this.infoUrl);
  }

  private getLeaders(data: any[], sex: string): LeaderModel[] {
    return data
      .filter(el => el.SEX === sex)
      .map(el => (
          new LeaderModel({
            duration: el.DURATION,
            fullName: el.FULLNAME,
            id: el.ID,
            place: el.PLACE,
            points: el.POINTS,
            sex: el.SEX
          })
        )
      );
  }

  private getAttenders(data: any[]): AttendersModel[] {
    return data
      .map(el => (
        new AttendersModel({
          amount: el.AMOUNT,
          fullName: el.FULLNAME,
          id: el.ID,
          period: el.PERIOD
        })
      ));
  }

  private getNovices(data: any[]): NoviceModel[] {
    return data
      .map(el => (
        new NoviceModel({
          fullName: el.FULLNAME,
          id: el.ID,
          currentPlace: el.CUR_PLACE,
          place: el.PLACE,
          placeDiff: el.PLACE_DIFF
        })
      ));
  }
}
