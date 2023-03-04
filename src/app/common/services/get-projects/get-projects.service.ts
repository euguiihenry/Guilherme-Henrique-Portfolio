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
    return environment.PROJECTS;
  }

  getData() {
    const mainURL = "https://raw.githubusercontent.com/euguiihenry/portfolio-database/main/projects.json?token="; 
    const api = this.getAPI();
    return this.http.get<Project[]>(mainURL + api);
  };
}
