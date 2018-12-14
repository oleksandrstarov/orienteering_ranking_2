import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';

import { AuthenticationService } from '../api/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private cookieService: CookieService,
              private authService: AuthenticationService) { }

  canActivate(): boolean {
    const sessionTime = moment(+this.cookieService.get('currentUser'));
    const currentTime = moment();
    const resultTime = sessionTime.diff(currentTime);

    if (this.cookieService.get('currentUser') && resultTime > 0) {
      return true;
    }

    this.authService.logout();
    this.router.navigate(['/dashboard']);
    return false;
  }
}
