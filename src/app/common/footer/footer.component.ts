import { Component, ViewChild, ElementRef, HostListener} from '@angular/core';
import { RouterService } from '../../common/services/router-check/router.service';
import { SiteLanguageService } from '../services/site-language/site-language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  public showInfo: boolean = false;
  public languageButton: boolean = false;

  @ViewChild('dropdownLang') menu!: ElementRef;
  @ViewChild('langBtnElement') langBtnElement!: ElementRef;
  @ViewChild('infoBtnElement') infoBtnElement!: ElementRef;
  @ViewChild('langueButtons') langueButtons!: ElementRef;

  constructor(readonly routerService: RouterService, private language: SiteLanguageService) {

  }

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    if(this.langBtnElement.nativeElement.contains(event.target)) {
      this.handleLanguageMenu();

    } else {
      setTimeout(() => {
        this.languageButton = false;
      }, 300);
    }

    if(this.infoBtnElement.nativeElement.contains(event.target)) {
      this.handleInfoMenu();
    } else {
      this.showInfo = false;
    }
  }

  handleInfoMenu() {
    this.showInfo = !this.showInfo;
  }

  handleLanguageMenu() {
    this.languageButton = !this.languageButton;
  }

  handleLanguageChoice(language: string) {
    this.language.setLanguage(language);
  }
}
