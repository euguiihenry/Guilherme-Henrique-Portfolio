import { Component } from '@angular/core';
import { ArrangeProjectCardService } from '../mutual/services/arrangeProjectCard/arrange-project-card.service';
import { PageTopics, ProjectCard, pageTopicsDefaultModel, projectCardDefaultModel } from '../mutual/models/project-card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  public project: ProjectCard;
  public pageTopics: PageTopics;

  constructor(public cardService: ArrangeProjectCardService) {
    this.project = projectCardDefaultModel();
    this.pageTopics = pageTopicsDefaultModel();
  }

  private loadPageTopics() {
    try {
      const langueObj = JSON.parse(localStorage.getItem('langueObj') || '');
      this.pageTopics = langueObj.project_cards

    } catch (error) {
      console.log(error);
    }
  }

  private loadProject(): void {
    try {
      const cardInfo: any = JSON.parse(sessionStorage.getItem('cardProject') || '');

      if (cardInfo && cardInfo != '') {
        this.project = cardInfo;
      } else {
        this.project = projectCardDefaultModel();
      }

      console.log(this.project)
    }
    catch (error) {
      console.log(error);
    }
  }

  ngOnInit(): void {
    this.loadPageTopics();
    this.loadProject();
  }


}
