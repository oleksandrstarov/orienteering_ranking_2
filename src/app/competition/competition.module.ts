import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatSortModule, MatTableModule } from '@angular/material';

import { CompetitionRoutingModule } from './competition-router.module';

import { CompetitionListComponent } from './competition-list.component';

@NgModule({
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    MatTableModule,
    MatIconModule,
    MatSortModule
  ],
  declarations: [
    CompetitionListComponent
  ],
  exports: []
})
export class CompetitionModule {
}
