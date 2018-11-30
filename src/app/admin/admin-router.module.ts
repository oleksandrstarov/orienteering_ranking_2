import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminCompetitionComponent } from './admin-competition/admin-competition.component';
import { AdminRunnersComponent } from './admin-runners/admin-runners.component';

const routes: Routes = [
  { path: 'competition', component: AdminCompetitionComponent },
  { path: 'runners', component: AdminRunnersComponent },
  { path: '**', redirectTo: 'competition', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AdminRoutingModule { }
