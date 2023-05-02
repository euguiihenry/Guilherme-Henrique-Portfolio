import { Component } from '@angular/core';
import { ArrangeLanguageService } from '../mutual/services/arrangeLanguage/arrange-language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public title: string = '';
  constructor(/* private getAboutPhrases: GetAboutPhrasesService, */ private siteLanguageService: ArrangeLanguageService) { }

  //phrases: AboutPhrase[] = [];

  defineLangue() {
    const langueStr = localStorage.getItem('langueObj');

    if (langueStr) {
      try {
        const langueObj = JSON.parse(langueStr);
        this.title = langueObj.about.title;
      } catch (e) {
        console.error('Failed to parse localStorage item: ', e);
      }
    }
  }

  ngOnInit(): void {
    this.defineLangue();

/*     this.getAboutPhrases.getAboutPhrases().subscribe((phrase: AboutPhrase) => {
      const langue = this.siteLanguageService.getLanguage();
      const phrases = phrase[langue!]
      this.phrases = Object.values(phrases);
    }); */
  }
}
