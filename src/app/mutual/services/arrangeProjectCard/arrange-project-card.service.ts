import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GetCurrentRouteService } from '../getCurrentRoute/get-current-route.service';
import axios from 'axios';
import { ProjectCard } from '../../models/project-card';
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

      sessionStorage.setItem('cardsProjects', JSON.stringify(info));

    } catch (error) {
      console.log(error);
    }
  }

  private storeCardInfo(id: number): void {

    const data = JSON.parse(sessionStorage.getItem('cardsProjects') || '');
    console.log(data);
  }

  public async getCardInfo(): Promise<ProjectCard | any> {
    try {
      const data = JSON.parse(sessionStorage.getItem('cardProjects') || '');
      return data;

    } catch (error) {
      console.log(error);
    }
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
