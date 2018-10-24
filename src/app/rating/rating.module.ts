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
  MatDividerModule, MatListModule, MatIconModule, MatCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RatingRoutingModule } from './rating-router.module';
import { RatingComponent } from './rating.component';

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
    FlexLayoutModule
  ],
  declarations: [
    RatingComponent
  ],
  exports: []
})
export class RatingModule {
}
