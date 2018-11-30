import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatChipsModule, MatIconModule, MatSortModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminRoutingModule } from './admin-router.module';
import { AdminCompetitionComponent } from './admin-competition/admin-competition.component';
import { AdminRunnersComponent } from './admin-runners/admin-runners.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule,
    MatChipsModule
  ],
  declarations: [
    AdminCompetitionComponent,
    AdminRunnersComponent
  ],
  exports: []

})
export class AdminModule {
}
