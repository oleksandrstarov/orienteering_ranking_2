import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule, MatIconModule, MatCardModule, MatTabsModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent } from './header.component';
import { ScrollDirective } from '../shared/directives/scroll.directive';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    RouterModule,
    MatTabsModule
  ],
  declarations: [
    HeaderComponent,
    ScrollDirective
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule {
}
