import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './footer.component';
import { LoginModule } from '../login/login.module';
import { DialogComponent } from '../shared/components/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule,
    LoginModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class FooterModule { }
