import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingRoutingModule} from "./rating-router.module";
import {
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule,
  MatSortModule,
  MatTableModule
} from "@angular/material";

import {RatingComponent} from "./rating.component";

@NgModule({
  imports: [
    CommonModule,
    RatingRoutingModule,
    MatSortModule,
    MatTableModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [
    RatingComponent
  ],
  exports: []
})
export class RatingModule {
}
