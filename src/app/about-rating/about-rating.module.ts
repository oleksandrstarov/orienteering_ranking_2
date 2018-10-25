import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatExpansionModule, MatGridListModule, MatListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AboutRatingRoutingModule } from './about-rating-router.module';
import { AboutRatingComponent } from './about-rating.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRatingRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatListModule,
    HttpClientModule,
    MatGridListModule,
    MatExpansionModule
  ],
  declarations: [
    AboutRatingComponent
  ],
  exports: []
})
export class AboutRatingModule {
}
