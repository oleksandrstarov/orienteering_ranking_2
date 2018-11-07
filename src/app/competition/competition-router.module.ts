import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompetitionListComponent } from './competition-list.component';
import { CompetitionViewComponent } from './components/competition-view/competition-view.component';

const routes: Routes = [
  { path: '', component: CompetitionListComponent },
  { path: ':id', component: CompetitionViewComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class CompetitionRoutingModule { }
