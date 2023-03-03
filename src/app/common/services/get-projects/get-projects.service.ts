import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './projects-interface';

@Injectable({
  providedIn: 'root'
})
export class GetProjectsService {
  readonly URL: string;
  readonly api: string = '';


  constructor(private http: HttpClient) {
    this.URL = "https://raw.githubusercontent.com/euguiihenry/portfolio-database/main/projects.json?token=" + this.api;
  }

  getData() {
    return this.http.get<Project[]>(this.URL);
  };
}
