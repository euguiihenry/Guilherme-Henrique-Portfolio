import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GetCurrentRouteService {

  constructor(private router: ActivatedRoute, private route: Router) { }

  activePath = (route: string) => this.router.firstChild ? this.router.firstChild.snapshot.url[0].path === route : false;

  getCurrentRoute(): Observable<string> {
    return this.route.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).url));
  }

  getUrl(): any {
    const url = window.location.href;
    const first_part = url.split('/').reverse().join('/');
    return first_part.split('/')[1];
  }

  getCompleteUrl(): any {
    const url = window.location.href;
    return url;
  }

  getRoutePath() {
    const url = window.location.href;
    const first_part = url.split('/').reverse().join('/');
    return "/" + first_part.split('/')[0];
  }

  earlyLocation(path: string) {
    localStorage.setItem('actualPath', path);
  }
}
