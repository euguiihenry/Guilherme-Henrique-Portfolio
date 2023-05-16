import { Component } from '@angular/core';
import { ArrangeLanguageService } from '../mutual/services/arrangeLanguage/arrange-language.service';
import axios from "axios";
import { environment } from 'src/environments/environment.development';
import { GetCurrentRouteService } from '../mutual/services/getCurrentRoute/get-current-route.service';
import { GetProjectsService } from '../mutual/services/getProjects/get-projects.service';
import { Projects } from '../mutual/models/projects';
import { ProjectCardComponent } from '../project-card/project-card.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  /*public info: ProjectInfo[] = [];
  public image: ProjectImages[] = [];*/
  public knows: string = "";
  public projects: any = [];
  private opened = false;

  constructor(private getProject: GetProjectsService, private languageService: ArrangeLanguageService, private currentRoute: GetCurrentRouteService) { }

  openCard(title: string) {
    console.log('Opening card: ' + title);
    this.openedCard();
  }

  defineLangue() {
    const langueStr = localStorage.getItem('langueObj');

    if (langueStr) {
      try {
        const langueObj = JSON.parse(langueStr);

        this.knows = langueObj.project.knows;
        console.log(this.knows);

      } catch (e) {
        console.error('Failed to parse localStorage item: ', e);
      }
    }
  }

  async getProjectsInfo() {
    try {
      const langue = this.languageService.getLanguage();
      const data = await this.getProject.getData();

      const langueObj: any = data.data_info[langue];
      const projects = langueObj.map((obj: any) => {
        const imgObj = data.data_img.find((img: any) => img.id === obj.id);
        return {
          ...obj,
          imgSrc: imgObj ? imgObj.imgSrc : null
        };
      });

      this.projects = Object.values(projects);

    } catch (error) {
      console.log(error);
    }
  }

  public openedCard(): boolean {
    this.opened = !this.opened;
    return this.opened
  }

  ngOnInit(): void {
    this.defineLangue();
    this.getProjectsInfo();
  }
}
