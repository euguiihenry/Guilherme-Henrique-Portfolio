import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  isActive(route: string): boolean {
    return this.route.firstChild ? this.route.firstChild.snapshot.url[0].path === route : false;
  }
}

