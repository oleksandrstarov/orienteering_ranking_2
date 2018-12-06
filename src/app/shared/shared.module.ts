import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { PreloaderComponent } from './components/preloader/preloader.component';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ],
  declarations: [
    PreloaderComponent,
    SplashScreenComponent,
    DialogComponent
  ],
  exports: [
    PreloaderComponent,
    SplashScreenComponent,
    DialogComponent
  ]
})
export class SharedModule {
}
