import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { LeaderModel } from '../../../shared/models/leader.model';
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
        attenders: res.stats.attenders,
        novices: res.stats.progress.novices,
        runnersUp: res.stats.progress.up,
        runnersDown: res.stats.progress.down
      })));
  }

  getInfo(): Observable<any> {
    return this.http.get(this.infoUrl);
  }

  private getLeaders(data: any[], sex: string): LeaderModel[] {
    return data
      .filter(el => el.sex === sex)
      .map(el => {
        el.duration = Math.floor(el.duration);
        el.points = el.points.toFixed(2);
        return el;
      });
  }
}
