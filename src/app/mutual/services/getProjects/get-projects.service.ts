import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GetCurrentRouteService } from '../getCurrentRoute/get-current-route.service';
import { environment } from 'src/environments/environment.development';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GetProjectsService {

  constructor(private router: Router, private currentRoute: GetCurrentRouteService) { }

  async getData() {
    try {
      const url = environment.HTTP_LINK + this.currentRoute.getUrl() + environment.PROJECTS_LINK;
      const data = await axios.get(url);

      let info = await data.data;

      return info;

    } catch (error) {
      console.log(error);
      this.router.navigate(['/error-page']);
    }
  }
}
