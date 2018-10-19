import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  CompetitionComponent} from './competition.component'


const routes: Routes = [
  { path: '', component: CompetitionComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class CompetitionRoutingModule { }
