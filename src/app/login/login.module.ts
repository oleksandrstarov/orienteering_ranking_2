import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
