import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatSortModule, MatTableModule } from '@angular/material';

import { CompetitionRoutingModule } from './competition-router.module';

import { CompetitionListComponent } from './competition-list.component';
import { CompetitionViewComponent } from './components/competition-view/competition-view.component';

@NgModule({
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    MatTableModule,
    MatIconModule,
    MatSortModule
  ],
  declarations: [
    CompetitionListComponent,
    CompetitionViewComponent
  ],
  exports: []
})
export class CompetitionModule {
}
