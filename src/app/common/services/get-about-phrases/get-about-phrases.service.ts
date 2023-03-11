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
    const api = this.getAPI();
    console.log(api);
    return this.http.get<any>(api);
  }
}
