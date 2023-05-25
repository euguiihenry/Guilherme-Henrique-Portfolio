import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GetCurrentRouteService } from '../getCurrentRoute/get-current-route.service';
import { ProjectCard, cardObject, projectCardDefaultModel } from '../../models/project-card';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})

export class ArrangeProjectCardService {
  private opened = false;

  constructor(private currentRoute: GetCurrentRouteService) { }

  public blockForegroundScroll = (): string => document.body.style.overflowY = 'hidden';

  public returnForegroundScroll = (): string => document.body.style.overflowY = 'scroll';

  public async getCardsData(): Promise<void> {
    try {
      const url = environment.HTTP_LINK + this.currentRoute.getUrl() + environment.CARD_LINK;
      const data = await axios.get(url);
      const info = data.data;

      sessionStorage.setItem('allCardsProject', JSON.stringify(info));

    } catch (error) {
      console.log(error);
    }
  }

  private storeCardInfo(id: number): void {

    const data = JSON.parse(sessionStorage.getItem('allCardsProject') || '');
    const langue = localStorage.getItem('langue') || '';

    const cardsText: any = Object.values(data).at(0);
    const cardsPic: any = Object.values(data).at(1);

    const cardsObjects: cardObject = {
        info: Object.values(cardsText[langue]),
        pics: Object.values(cardsPic)
    }

    const cardObj: ProjectCard = {
      ...cardsObjects.info[id],
      ...cardsObjects.pics[id]
    }

    sessionStorage.setItem('cardProject', JSON.stringify(cardObj));
  }

  public changeOpened = (): boolean => this.opened = !this.opened;

  public isCardOpen = (): boolean => this.opened;

  public openCard(id: number): void {
    this.blockForegroundScroll();
    this.changeOpened();
    this.getCardsData();
    this.storeCardInfo(id);
  }

  public closeCard(): void {
    this.returnForegroundScroll();
    this.changeOpened();
  }



}
