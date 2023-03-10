import { Component } from '@angular/core';
import { RouterService } from '../../common/services/router-check/router.service';
import { SiteLanguageService } from '../services/site-language/site-language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public showInfo: boolean = true;
  public languageButton: boolean = true;

  constructor(readonly routerService: RouterService, private language: SiteLanguageService) {

  }

  openInfo() {
    this.showInfo = false;
  }

  closeInfo() {
    this.showInfo = true;
  }

  checkLanguage() {

  }

  handleLanguageMenu() {
    

    if(this.languageButton) {
      this.languageButton = false;
      
    } else {
      this.languageButton = true;
    }
  }

  handleLanguageChoice() {
    const langue = localStorage.getItem('langue');

    switch(langue) {
      case 'pt':
        console.log("The site's language is " + langue)
        break;
      case 'en':
        break;
      case 'es':
        break;
      case 'fr':
        break;
    }
  }
}
