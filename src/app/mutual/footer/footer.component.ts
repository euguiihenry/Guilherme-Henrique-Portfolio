import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { GetCurrentRouteService } from '../services/getCurrentRoute/get-current-route.service';
import { ArrangeLanguageService } from '../services/arrangeLanguage/arrange-language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public showInfo: boolean = false;
  public languageButton: boolean = false;

  @ViewChild('dropdownLang') menu!: ElementRef;
  @ViewChild('langBtnElement') langBtnElement!: ElementRef;
  @ViewChild('infoBtnElement') infoBtnElement!: ElementRef;
  @ViewChild('langueButtons') langueButtons!: ElementRef;

  constructor(readonly routerService: GetCurrentRouteService, private language: ArrangeLanguageService) { }

  @HostListener('document:click', ['$event']) onDocumentClick(event: MouseEvent) {
    if (this.langBtnElement.nativeElement.contains(event.target)) {
      this.handleLanguageMenu();

    } else {
      setTimeout(() => {
        this.languageButton = false;
      }, 300);
    }

    if (this.infoBtnElement.nativeElement.contains(event.target)) {
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
