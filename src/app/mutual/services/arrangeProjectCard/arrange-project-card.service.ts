import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { GetCurrentRouteService } from '../getCurrentRoute/get-current-route.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ArrangeProjectCardService {
  private opened = false;

  constructor(private currentRoute: GetCurrentRouteService) { }

  public blockForegroundScroll = (): string => document.body.style.overflowY = 'hidden';

  public returnForegroundScroll = (): string => document.body.style.overflowY = 'scroll';

  public async getCardData(): Promise<void> {
    try {
      const url = environment.HTTP_LINK + this.currentRoute.getUrl() + environment.CARD_LINK;
      const data = await axios.get(url);
      const info = data.data;

      sessionStorage.setItem('cardProjects', JSON.stringify(info));

    } catch (error) {
      console.log(error);
    }
  }

  public async getCardInfo(title: number): Promise<void> {
    try {
      const data = JSON.parse(sessionStorage.getItem('cardProjects') || '');
      console.log(data);

    } catch (error) {
      console.log(error);
    }


    console.log("Opening the card: " + title);
  }

  public changeOpened = (): boolean => this.opened = !this.opened;

  public isCardOpen = (): boolean => this.opened;

  public openCard(id: number): void {
    this.blockForegroundScroll();
    this.changeOpened();
    this.getCardInfo(id);
  }

  public closeCard(): void {
    this.returnForegroundScroll();
    this.changeOpened();
  }



}
