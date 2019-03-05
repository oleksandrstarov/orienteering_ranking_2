import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthenticationService } from '../../core/api/auth/auth.service';

@Component({
  selector: 'app-admin-module',
  templateUrl: './admin-module.component.html',
  styleUrls: ['./admin-module.component.css']
})
export class AdminModuleComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
              private authService: AuthenticationService) {
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        AdminModuleComponent.sendMessageToReact();
      }
    });
  }

  ngOnInit(): void {
    window.addEventListener('message', (e) => this.getMessageFromReact(e));
  }

  ngOnDestroy(): void {
    window.removeEventListener('message', (e) => this.getMessageFromReact(e));
  }

  private static sendMessageToReact(): void {
    const path = window.location.href.split('/')[window.location.href.split('/').length - 1];
    const iframeEl = document.getElementById('react-iframe');
    (<HTMLIFrameElement>iframeEl).contentWindow.postMessage({ path: path }, '*');
  }

  private getMessageFromReact(e: any): void {
    if (e.data.error) {
      this.authService.logout();
      this.router.navigate(['/dashboard']);
    }

    if (e.data.componentDidMount) {
      AdminModuleComponent.sendMessageToReact();
    }
  }

}
