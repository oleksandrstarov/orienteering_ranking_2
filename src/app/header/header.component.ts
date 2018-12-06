import { Component, OnInit } from '@angular/core';

import { USER_NAV_LINKS } from './local/constants/mock-links.const';
import { ADMIN_NAV_LINKS } from './local/constants/mock-links.const';
import { AuthenticationService } from '../core/api/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userNavLinks = USER_NAV_LINKS;
  adminNavLinks = ADMIN_NAV_LINKS;
  isMenuOpened = true;
  isAdmin: boolean;

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.authenticationService.onAuthorize()
      .subscribe(res => this.isAdmin = res);
  }

  logOut(): void {
    this.authenticationService.logout();
  }

  toggle(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
