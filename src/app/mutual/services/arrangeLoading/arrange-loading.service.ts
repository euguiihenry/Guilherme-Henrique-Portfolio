import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArrangeLoadingService {

  bool: boolean;

  constructor() {
    this.bool = true;
  }

  delay(ms:number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  loadScreen = (): void => {
    this.disableScroll();
    this.delay(2800)
      .then(() => {
        this.bool = false;
        this.enableScroll();
      })
  }

  resetBool = (): void => {
    this.bool = true;
    this.loadScreen();
  }

  returnBool = (): boolean => this.bool;

  disableScroll = (): void => {
    document.body.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  enableScroll = (): void => {
    document.body.style.overflow = 'scroll';
  }

}
