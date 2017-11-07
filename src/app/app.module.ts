import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RunnersComponent } from './components/runners/runners.component';
import { RunnerComponent } from './components/runner/runner.component';
import { CompetitionsComponent } from './components/competitions/competitions.component';
import { CompetitionComponent } from './components/competition/competition.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RunnersComponent,
    RunnerComponent,
    CompetitionsComponent,
    CompetitionComponent,
    AboutComponent,
    MenuComponent,
    LoaderComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
