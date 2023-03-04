import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AboutPhrase } from './about-phrases-interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetAboutPhrasesService {

  constructor(private http: HttpClient) { }

  getAPI() {
    return environment.ABOUT_PHRASES;
  }

  getAboutPhrases() {
    const mainURL = "https://raw.githubusercontent.com/euguiihenry/portfolio-database/main/about-phrases.json?token=";
    const api = this.getAPI();

    return this.http.get<any>(mainURL + api);
  }
}
