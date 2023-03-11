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
    return api;
  }

  getData() {
    const api = this.getAPI();
    return this.http.get<Project[]>(api);
  };
}
