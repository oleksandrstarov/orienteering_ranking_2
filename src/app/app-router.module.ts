import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'rating',
    loadChildren: './rating/rating.module#RatingModule'
  },
  {
    path: 'competition',
    loadChildren: './competition/competition.module#CompetitionModule'
  },
  {
    path: 'about-rating',
    loadChildren: './about-rating/about-rating.module#AboutRatingModule'
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
