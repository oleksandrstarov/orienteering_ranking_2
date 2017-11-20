import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RunnersService } from './api/runners.service';
import { CompetitionsService } from './api/competitions.service';
import { DashboardService } from './api/dashboard.service';
import { AboutService } from './api/about.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    HttpClient,
    RunnersService,
    CompetitionsService,
    DashboardService,
    AboutService
  ]
})
export class CoreModule { }
