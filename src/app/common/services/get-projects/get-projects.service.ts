import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectInfo, ProjectImages } from './projects-interface';
import { environment } from '../../../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class GetProjectsService {

  constructor(private http: HttpClient) { }

  getInfo() {
    return this.http.get<ProjectInfo[]>(environment.PROJECTS_INFO);
  }

  getImage() {
    return this.http.get<ProjectImages[]>(environment.PROJECTS_IMAGES);
  }
}
