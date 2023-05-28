import { Component } from '@angular/core';
import { ArrangeLanguageService } from '../mutual/services/arrangeLanguage/arrange-language.service';
import { GetCurrentRouteService } from '../mutual/services/getCurrentRoute/get-current-route.service';
import { GetProjectsService } from '../mutual/services/getProjects/get-projects.service';
import { ArrangeProjectCardService } from '../mutual/services/arrangeProjectCard/arrange-project-card.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public knows: string = "";
  public projects: any = [];

  constructor(private getProject: GetProjectsService, private languageService: ArrangeLanguageService, private currentRoute: GetCurrentRouteService, readonly cardService: ArrangeProjectCardService) { }

  private getKnows(): void {
    try {
      const langueStr = localStorage.getItem('langueObj');

      if(langueStr)
        this.knows = JSON.parse(langueStr).project.knows;

    } catch (e) {
      console.error('Failed to parse localStorage item: ', e);
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

  ngOnInit(): void {
    this.getKnows();
    this.getProjectsInfo();
  }
}
