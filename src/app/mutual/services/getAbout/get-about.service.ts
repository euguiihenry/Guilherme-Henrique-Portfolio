import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { GetCurrentRouteService } from '../getCurrentRoute/get-current-route.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GetAboutService {

  constructor(private router: Router, private currentRoute: GetCurrentRouteService) { }

  async getData() {
    try {
      const url = environment.HTTP_LINK + this.currentRoute.getUrl() + environment.ABOUT_LINK;
      const data = await axios.get(url);

      let info = await data.data;

      return info;

    } catch (error) {
      console.log(error);
      this.router.navigate(['/error-page']);
    }
  }
}
