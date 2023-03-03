import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './projects-interface';
import { environment } from '../../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GetProjectsService {
  readonly URL: string;
  readonly api = environment.apiUrl;


  constructor(private http: HttpClient) {
    this.URL = "https://raw.githubusercontent.com/euguiihenry/portfolio-database/main/projects.json?token=" + this.api;
  }

  getData() {
    console.log(this.api)
    return this.http.get<Project[]>(this.URL);
  };
}
