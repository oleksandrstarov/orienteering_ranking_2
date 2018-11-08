import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatTableModule,
  MatGridListModule,
  MatDividerModule, MatListModule, MatIconModule, MatCardModule, MatTooltipModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RatingRoutingModule } from './rating-router.module';
import { RatingComponent } from './rating.component';
import { RunnerViewComponent } from './components/runner-view/runner-view.component';

@NgModule({
  imports: [
    CommonModule,
    RatingRoutingModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatTooltipModule
  ],
  declarations: [
    RatingComponent,
    RunnerViewComponent
  ],
  exports: []
})
export class RatingModule {
}
