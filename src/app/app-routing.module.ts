import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RunnersComponent } from './components/runners/runners.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { RunnerComponent } from './components/runner/runner.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'runners', component: RunnersComponent,
    children: [
        {path: ':id', component: RunnerComponent}
      ]
  },
  {path: 'competitions', component: CompetitionsComponent,
    children: [
        {path: ':id', component: CompetitionComponent}
      ]
  },
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
