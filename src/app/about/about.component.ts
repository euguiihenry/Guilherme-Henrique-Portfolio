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

  getLangueNumber(): number {
    const num = -1;

    return num;
  }

  async getAboutInfo() {
    this.defineLangue();
    let about = await this.aboutService.getData();
    const langueStr = localStorage.getItem('langueObj');

    console.log(about);

    about = Object.values(about);

    console.log(about);

    this.about = about;

    console.log('About: ', about);
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
