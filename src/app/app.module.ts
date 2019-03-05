import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule, MatListModule, MatMenuModule } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

import { HeaderModule } from './header/header.module';
import { AppRoutingModule } from './app-router.module';
import { AppComponent } from './app.component';
import { FooterModule } from './footer/footer.module';
import { SharedModule } from './shared/shared.module';
import { DelayInterceptor } from './core/interceptors/delay-interceptor';
import { LoginModule } from './login/login.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { ServerDataUpdateInterceptor } from './core/interceptors/server-data-update.interceptor';

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
    SharedModule,
    LoginModule
  ],
  exports: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: DelayInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ServerDataUpdateInterceptor, multi: true },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
