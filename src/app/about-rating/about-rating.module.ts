import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutRatingRoutingModule} from "./about-rating-router.module";

import {AboutRatingComponent} from "./about-rating.component";


@NgModule({
  imports: [
    CommonModule,
    AboutRatingRoutingModule
  ],
  declarations: [
    AboutRatingComponent
  ],
  exports: []
})
export class AboutRatingModule {
}
