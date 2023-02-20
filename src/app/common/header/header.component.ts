import { Component, OnInit, ChangeDetectorRef, EventEmitter } from '@angular/core';
import { GetCurrentRouteService } from '../services/get-current-route/get-current-route.service';
import { Router } from '@angular/router';
import { RouterService } from '../services/router-check/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  currentURL: string;
  className: string
  //public status: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private currentRouteService: GetCurrentRouteService, private changeDetectorRef: ChangeDetectorRef, readonly routerService: RouterService) {
    this.currentURL = '';
    this.className = '';
  }
  ngOnInit(): void {
    this.currentRouteService.getCurrentRoute().subscribe(route => {
      this.currentURL = route;
    })
  }
}
