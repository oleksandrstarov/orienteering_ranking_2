import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatChipsModule, MatIconModule, MatSortModule, MatTableModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { CompetitionRoutingModule } from './competition-router.module';
import { CompetitionListComponent } from './competition-list.component';
import { CompetitionViewComponent } from './components/competition-view/competition-view.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    MatTableModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    FlexLayoutModule,
    SharedModule,
    ScrollToModule.forRoot(),
    MatChipsModule
  ],
  declarations: [
    CompetitionListComponent,
    CompetitionViewComponent
  ],
  exports: []
  
})
export class CompetitionModule {
}
