import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material';

import { PreloaderComponent } from './components/preloader/preloader.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    PreloaderComponent,
    SplashScreenComponent
  ],
  exports: [
    PreloaderComponent,
    SplashScreenComponent
  ]
})
export class SharedModule {
}
