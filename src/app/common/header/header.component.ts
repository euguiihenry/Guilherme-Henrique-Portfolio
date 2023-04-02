import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { GetCurrentRouteService } from '../services/get-current-route/get-current-route.service';
import { RouterService } from '../services/router-check/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  currentURL: string;
  className: string

  public objectStr = {
    home: "",
    about: "",
    projects: "",
    academic: "",
    contact: ""
  }

  defineLangue() {
    const langueStr = localStorage.getItem('langueObj');

    if (langueStr) {
      try {
        const langueObj = JSON.parse(langueStr);

        this.objectStr.home = langueObj.navbar.home;
        this.objectStr.about = langueObj.navbar.about;
        this.objectStr.projects = langueObj.navbar.projects;
        this.objectStr.academic = langueObj.navbar.academic;
        this.objectStr.contact = langueObj.navbar.contact;

      } catch (e) {
        console.error('Failed to parse localStorage item: ', e);
      }
    }
  }

  constructor(private currentRouteService: GetCurrentRouteService, private changeDetectorRef: ChangeDetectorRef, readonly routerService: RouterService) {
    this.currentURL = '';
    this.className = '';
  }
  ngOnInit(): void {
    this.defineLangue();

    this.currentRouteService.getCurrentRoute().subscribe(route => {
      this.currentURL = route;
    })
  }
}
