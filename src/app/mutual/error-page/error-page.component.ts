import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { GetCurrentRouteService } from '../services/getCurrentRoute/get-current-route.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {
  constructor(private router: Router, private location: Location, private currentRoute: GetCurrentRouteService) {}

  goHome() {
    this.router.navigate(['/home']);
    this.location.onUrlChange(location => window.location.reload());
  }

  open(url: string) {
    window.location.href = url;
  }

  tryAgain() {
    const url = localStorage.getItem('actualPath');
    console.log(url);
    this.router.navigate([url]);
    this.location.onUrlChange(location => window.location.reload());
  }
}
