import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { APP_DATE, APP_VERSION } from '../../environments/version';
import { DialogComponent } from '../shared/components/dialog/dialog.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  appVersion = APP_VERSION;
  appDate = APP_DATE;
  name: string;
  password: string;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '320px',
      data: { name: this.name, password: this.password }
    });
  }

}
