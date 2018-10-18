import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RatingRoutingModule} from "./rating-router.module";

import {RatingComponent} from "./rating.component";


@NgModule({
  imports: [
    CommonModule,
    RatingRoutingModule
  ],
  declarations: [
    RatingComponent
  ],
  exports: []
})
export class RatingModule {
}
