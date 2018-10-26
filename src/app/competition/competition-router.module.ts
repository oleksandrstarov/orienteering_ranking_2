import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionListComponent } from './competition-list.component';

const routes: Routes = [
  { path: '', component: CompetitionListComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class CompetitionRoutingModule { }
