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
    this.delay(2000)
      .then(() => this.bool = false);
  }

  resetBool = (): void => {
    this.bool = true;
    this.loadScreen();
  }

  returnBool = (): boolean => this.bool;

}
