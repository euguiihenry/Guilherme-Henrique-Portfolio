import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {
  constructor(private router: Router, private location: Location) {}

  goHome() {
    this.router.navigate(['/home']);
    this.location.onUrlChange(location => window.location.reload());
  }

  open(url: string) {
    window.location.href = url;
  }
}
