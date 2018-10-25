import { Component, OnInit } from '@angular/core';

import { APP_DATE, APP_VERSION } from '../../../../environments/version';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appVersion = APP_VERSION;
  appDate = APP_DATE;

  constructor() {
  }

  ngOnInit(): void {
  }
}
