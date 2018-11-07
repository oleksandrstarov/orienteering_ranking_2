import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RatingComponent } from './rating.component';
import { RunnerViewComponent } from './components/runner-view/runner-view.component';

const routes: Routes = [
  {
    path: '',
    component: RatingComponent
  },
  {
    path: ':id',
    component: RunnerViewComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RatingRoutingModule { }
