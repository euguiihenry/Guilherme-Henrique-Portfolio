import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentRouteService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  getCurrentRoute(): Observable<string> {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).url)
    );
  }
}



