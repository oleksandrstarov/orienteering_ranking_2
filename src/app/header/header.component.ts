import { Component, OnInit } from '@angular/core';

import { NAV_LINKS } from './local/constants/mock-links.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navLinks = NAV_LINKS;
  isMenuOpened = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
