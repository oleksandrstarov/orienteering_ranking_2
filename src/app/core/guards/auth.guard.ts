import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import * as moment from 'moment';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private cookieService: CookieService) { }

  canActivate(): boolean {
    const sessionTime = moment(new Date(+this.cookieService.get('currentUser')));
    const currentTime = moment();
    const resultTime = sessionTime.diff(currentTime);

    if (this.cookieService.get('currentUser') && resultTime > 0) {
      return true;
    }

    this.router.navigate(['/dashboard']);
    return false;
  }
}
