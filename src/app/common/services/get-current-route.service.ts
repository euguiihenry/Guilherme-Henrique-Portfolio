import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetCurrentRouteService {
  constructor(private router: Router) { }

  getCurrentRoute() {
    const currentRoute = this.router.url;
    console.log(currentRoute);
    //this.activatedRoute.url.subscribe(answer => console.log(answer));
  }
}
