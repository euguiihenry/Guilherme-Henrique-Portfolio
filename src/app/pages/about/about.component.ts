import { SiteLanguageService } from './../../common/services/site-language/site-language.service';
import { Component } from '@angular/core';
import { GetAboutPhrasesService } from '../../common/services/get-about-phrases/get-about-phrases.service';
import { AboutPhrase } from '../../common/services/get-about-phrases/about-phrases-interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public title: string = '';
  constructor(private getAboutPhrases: GetAboutPhrasesService, private siteLanguageService: SiteLanguageService) { }

  phrases:AboutPhrase[] = [];

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

    this.getAboutPhrases.getAboutPhrases().subscribe((phrase: AboutPhrase) => {
      const langue = this.siteLanguageService.getLanguage();
      const phrases = phrase[langue!]
      this.phrases = Object.values(phrases);
    });
  }
}
