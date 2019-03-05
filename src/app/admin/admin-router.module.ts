import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminModuleComponent } from './admin-module/admin-module.component';

const routes: Routes = [
  { path: ':competition', component: AdminModuleComponent },
  { path: ':runners', component: AdminModuleComponent },
  { path: '**', redirectTo: 'competition', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AdminRoutingModule {}
