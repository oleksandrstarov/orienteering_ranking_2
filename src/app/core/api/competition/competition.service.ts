import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private readonly configUrl = `${environment.baseURL}/competitions`;
  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}
