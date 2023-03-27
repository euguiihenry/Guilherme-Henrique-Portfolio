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
    const url="https://raw.githubusercontent.com/euguiihenry/portfolio-database/8918d242ea4b179ea7ebfa3925fd40dd1a795759/about-phrases-global/about.json?token="
    return `${environment.ABOUT_PHRASES}`
  }

  getAboutPhrases() {

    return this.http.get<any>(this.getAPI());
  }
}
