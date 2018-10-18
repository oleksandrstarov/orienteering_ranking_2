import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  AboutRatingComponent} from './about-rating.component'


const routes: Routes = [
  { path: '', component: AboutRatingComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class AboutRatingRoutingModule { }
