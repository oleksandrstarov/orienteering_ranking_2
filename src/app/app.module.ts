import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatListModule, MatMenuModule } from '@angular/material';

import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-router.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { SharedModule } from './shared/shared.module';
import { DelayInterceptor } from './core/interceptors/delay-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    HeaderModule,
    FooterModule,
    SharedModule
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: DelayInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
