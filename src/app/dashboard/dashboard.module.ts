import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-router.module';

import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    MatIconModule,
    SharedModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: []
})
export class DashboardModule {
}
