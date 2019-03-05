import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private readonly configUrl = `${environment.baseURL}about`;
  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}
