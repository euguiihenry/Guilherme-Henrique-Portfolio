import { Component } from '@angular/core';
import { ArrangeLanguageService } from '../mutual/services/arrangeLanguage/arrange-language.service';
import { GetCurrentRouteService } from '../mutual/services/getCurrentRoute/get-current-route.service';
import { environment } from 'src/environments/environment.development';
import { GetAboutService } from '../mutual/services/getAbout/get-about.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public title: string = '';
  constructor(private aboutService: GetAboutService,/* private getAboutPhrases: GetAboutPhrasesService, */ private siteLanguageService: ArrangeLanguageService, private currentRoute: GetCurrentRouteService) { }

  //phrases: AboutPhrase[] = [];
  public about: any[] = [];

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

  async getAboutInfo() {
    this.defineLangue();

    try {
      const langueStr = localStorage.getItem('langue') || '';
      const about = await this.aboutService.getData();
      this.about = about[langueStr];
      this.about = Object.values(this.about);

    } catch (error) {
      console.error(error);
    }
  }


  ngOnInit(): void {
    this.getAboutInfo();

/*     this.getAboutPhrases.getAboutPhrases().subscribe((phrase: AboutPhrase) => {
      const langue = this.siteLanguageService.getLanguage();
      const phrases = phrase[langue!]
      this.phrases = Object.values(phrases);
    }); */
  }
}
