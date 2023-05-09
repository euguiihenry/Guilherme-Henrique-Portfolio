import { Component } from '@angular/core';
import { ArrangeLanguageService } from '../mutual/services/arrangeLanguage/arrange-language.service';
import axios from "axios";
import { environment } from 'src/environments/environment.development';
import { GetCurrentRouteService } from '../mutual/services/getCurrentRoute/get-current-route.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  /*public info: ProjectInfo[] = [];
  public image: ProjectImages[] = [];*/
  public project: any;
  public knows: string = "";
  public info: any;
  public img: any;

  constructor(/*private projectsJSON: GetProjectsService,*/ private languageService: ArrangeLanguageService, private currentRoute: GetCurrentRouteService) { }

  /*getData() {
    const info$ = this.projectsJSON.getInfo();
    const image$ = this.projectsJSON.getImage();

    forkJoin({ info: info$, image: image$ }).subscribe(({ info, image }) => {
      this.info = info;
      this.image = image;

      this.combine(info);
    });
  }*/

  async getData() {
    try {
      const url = environment.HTTP_LINK + this.currentRoute.getUrl() + environment.PROJECTS_LINK;
      const data = await axios.get(url);

      this.project = await data.data;
      console.log(await data.data);

    } catch (error) {
      
    }
    
  }

/*  combine(info: any) {
    const languageString = Object.keys(this.info);
    for (const key in languageString) {
      if(languageString[key] === this.languageService.getLanguage()) {
        const data = info[languageString[key]];
        this.info = data;
      }
    }
    this.project = this.info;
  }*/

  openCard(title: string) {
    console.log('Opening card: ' + title);
  }

  defineLangue() {
    const langueStr = localStorage.getItem('langueObj');
    
    if (langueStr) {
      try {
        const langueObj = JSON.parse(langueStr);

        this.knows = langueObj.project.knows;
        
      } catch (e) {
        console.error('Failed to parse localStorage item: ', e);
      }
    }
  }

  ngOnInit(): void {
    this.defineLangue();
    this.getData();
  }
}
