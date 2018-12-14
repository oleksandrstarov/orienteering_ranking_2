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
  MatDividerModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatOptionModule,
  MatButtonModule, MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';

import { RatingRoutingModule } from './rating-router.module';
import { RatingComponent } from './rating.component';
import { RunnerViewComponent } from './components/runner-view/runner-view.component';
import { RunnerCompareComponent } from './components/runner-compare/runner-compare.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    ReactiveFormsModule,
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
    MatTooltipModule,
    ChartsModule,
    SharedModule,
    MatAutocompleteModule,
    MatOptionModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    RatingComponent,
    RunnerViewComponent,
    RunnerCompareComponent
  ],
  exports: []
})
export class RatingModule {
}
