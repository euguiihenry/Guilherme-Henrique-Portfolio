import { Component } from '@angular/core';
import { GetProjectsService } from 'src/app/common/services/get-projects/get-projects.service';
import { Project } from '../../common/services/get-projects/projects-interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];;

  constructor(private projectsJSON: GetProjectsService) {

  }

  getProjects() {
    this.projectsJSON.getData().subscribe( (response: Project[]) => {
      
/*       this.projects.push(response)
      console.log(this.projects) */

      for (const e of response) {
        this.projects[e.id] = e;
      }

      console.log(this.projects);
    })
  }

  ngOnInit() {
    this.getProjects();
  }
}
