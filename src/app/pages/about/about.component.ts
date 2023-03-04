import { Component } from '@angular/core';
import { GetAboutPhrasesService } from '../../common/services/get-about-phrases/get-about-phrases.service';
import { AboutPhrase } from '../../common/services/get-about-phrases/about-phrases-interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private getAboutPhrases: GetAboutPhrasesService) {

  }

  phrases:string[] = [];

  ngOnInit(): void {
    this.getAboutPhrases.getAboutPhrases().subscribe((phrase: AboutPhrase) => {
      this.phrases = Object.values(phrase);
    });
  }
}
