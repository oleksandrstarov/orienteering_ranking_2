import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-app';
  isLoaded = false;

  ngOnInit(): void {
    setTimeout(() => this.isLoaded = true, 1500);
  }
}
