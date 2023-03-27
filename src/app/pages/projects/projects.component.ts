import { Component } from '@angular/core';
import { GetProjectsService } from 'src/app/common/services/get-projects/get-projects.service';
import { ProjectInfo, ProjectImages, Project } from '../../common/services/get-projects/projects-interface';
import { forkJoin } from 'rxjs';
import { SiteLanguageService } from '../../common/services/site-language/site-language.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  public info: ProjectInfo[] = [];
  public image: ProjectImages[] = [];
  public project: any;

  constructor(private projectsJSON: GetProjectsService, private languageService: SiteLanguageService) { }

  getData() {
    const info$ = this.projectsJSON.getInfo();
    const image$ = this.projectsJSON.getImage();

    forkJoin({ info: info$, image: image$ }).subscribe(({ info, image }) => {
      this.info = info;
      this.image = image;

      this.combine(info);
    });
  }

  combine(info: any) {
    const languageString = Object.keys(this.info);
    for (const key in languageString) {
      if(languageString[key] === this.languageService.getLanguage()) {
        const data = info[languageString[key]];
        this.info = data;
      }
    }
    this.project = this.info;
  }

  openCard(title: string) {
    console.log('Opening card: ' + title);
  }

  ngOnInit(): void {
    this.getData();
  }
}
