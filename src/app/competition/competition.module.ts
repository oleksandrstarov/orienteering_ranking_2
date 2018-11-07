import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatIconModule, MatSortModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CompetitionRoutingModule } from './competition-router.module';
import { CompetitionListComponent } from './competition-list.component';
import { CompetitionViewComponent } from './components/competition-view/competition-view.component';

@NgModule({
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [
    CompetitionListComponent,
    CompetitionViewComponent
  ],
  exports: []
})
export class CompetitionModule {
}
