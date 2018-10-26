import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private readonly configUrl = 'http://localhost:8080/competitions';
  constructor(private http: HttpClient) { }

  getCompetitions(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}
