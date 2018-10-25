import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private readonly configUrl = 'http://localhost:8080/about';
  constructor(private http: HttpClient) { }

  getGroups(): Observable<any> {
    return this.http.get(this.configUrl);
  }
}
