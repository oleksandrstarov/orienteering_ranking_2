import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompetitionRoutingModule} from "./competition-router.module";

import {CompetitionComponent} from "./competition.component";

@NgModule({
  imports: [
    CommonModule,
    CompetitionRoutingModule
  ],
  declarations: [
    CompetitionComponent
  ],
  exports: []
})
export class CompetitionModule {
}
