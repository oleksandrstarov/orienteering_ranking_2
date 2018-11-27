import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule
  ],
  declarations: [
    FooterComponent
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
