import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './projects-interface';
import { environment } from '../../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GetProjectsService {

  constructor(private http: HttpClient) { }

  getAPI() {
    const api = environment.PROJECTS;
    const url = "https://raw.githubusercontent.com/euguiihenry/portfolio-database/8918d242ea4b179ea7ebfa3925fd40dd1a795759/projects-global/projects-info.json?token=";
    return `${url}${api}`;
  }

  getData() {
    const api = this.getAPI();
    console.log(api);
    return this.http.get<Project[]>(api);
  };
}
