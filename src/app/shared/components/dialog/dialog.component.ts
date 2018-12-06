import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../core/api/auth/auth.service';
import { LOCALIZATION_SETTINGS } from '../../const/localization-settings.const';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  hide = true;
  credentials: any = {};
  formError = false;
  localizationSettings = LOCALIZATION_SETTINGS;
  errorMessage = '';

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
              private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onConfirm(): boolean {
    this.formError = false;

    if (!this.credentials.name || !this.credentials.password) {
      this.formError = true;
      this.errorMessage = this.localizationSettings.formsErrors.emptyFields;
      return false;
    }
    this.authenticationService.login(this.credentials.name, this.credentials.password)
      .subscribe(
        () => {
          this.dialogRef.close(this.credentials);
          this.router.navigate(['/admin/runners']);
        },
        () => {
          this.formError = true;
          this.errorMessage = this.localizationSettings.formsErrors.invalidCredentials;
        });
  }
}
