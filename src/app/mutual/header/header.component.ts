import { Component } from '@angular/core';
import { GetCurrentRouteService } from '../services/getCurrentRoute/get-current-route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(readonly routerService: GetCurrentRouteService) { }

  currentURL: string = '';

  public objectStr = {
    home: "",
    about: "",
    projects: "",
    contact: ""
  }

  private defineLangue() {
    const langueStr = localStorage.getItem('langueObj');

    if (langueStr) {
      try {
        const langueObj = JSON.parse(langueStr);

        this.objectStr.home = langueObj.navbar.home;
        this.objectStr.about = langueObj.navbar.about;
        this.objectStr.projects = langueObj.navbar.projects;
        this.objectStr.contact = langueObj.navbar.contact;

      } catch (e) {
        console.error('Failed to parse localStorage item: ', e);
      }
    }
  }

  ngOnInit(): void {
    this.defineLangue();

    this.routerService.getCurrentRoute().subscribe(route => {
      this.currentURL = route;
    })
  }
}
