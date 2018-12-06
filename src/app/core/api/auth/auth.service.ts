import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private authSubject$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router) {
    this.authSubject$.next(!!this.cookieService.get('currentUser'));
  }

  login(user: string, password: string): Observable<any> {
    return this.http.put(`${environment.baseURL}/adminLogin`, { user, password })
      .pipe(map((res: any) => {
        this.cookieService.set('currentUser', JSON.stringify(res.expires));
        if (res.error) {
          this.cookieService.set('currentUser', JSON.stringify(res.error));
          return throwError('wrong password');
        }
        this.authSubject$.next(true);
        return res;
      }));
  }

  logout(): void {
    this.cookieService.delete('currentUser');
    this.authSubject$.next(false);
    this.router.navigate(['/dashboard']);
  }

  onAuthorize(): Observable<boolean> {
    return this.authSubject$.asObservable();
  }
}
