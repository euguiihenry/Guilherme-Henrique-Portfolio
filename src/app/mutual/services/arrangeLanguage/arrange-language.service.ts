import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { GetCurrentRouteService } from '../getCurrentRoute/get-current-route.service';

@Injectable({
  providedIn: 'root'
})
export class ArrangeLanguageService {

  constructor(private location: Location, private http: HttpClient, private router: Router, private currentRoute: GetCurrentRouteService) { }

  private reload = (): void => window.location.reload();

  private saveLanguage = (langue: string): void => localStorage.setItem('langue', langue);

  public async tryLangue(langue: string) {
    try {
      const url = environment.HTTP_LINK + this.currentRoute.getUrl() + environment.LANGUE_OBJECT_LINK;
      const data = await axios.get(url);

      let info = await data.data;

      if (info) {
        const langueObj = JSON.stringify(info[langue]);

        localStorage.setItem('langueObj', langueObj);
      }

      return info;
    } catch (error) {
      console.log("It was not possible to access the language object server!");
      console.log(error);
      this.router.navigate(['/error-page']);
    }
  }

  public async setLanguage(langue: string) {
    this.saveLanguage(langue);

    const returned = await this.tryLangue(langue)

    if (returned) {
      this.reload();
    }
  }

  public getLanguage() {
    const langue = localStorage.getItem('langue');
    return langue;
  }
}
