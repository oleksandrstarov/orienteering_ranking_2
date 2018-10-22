import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  RatingComponent} from './rating.component'


const routes: Routes = [
  { path: '', component: RatingComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class RatingRoutingModule { }
