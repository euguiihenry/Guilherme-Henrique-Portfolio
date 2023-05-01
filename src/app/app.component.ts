import { Component } from '@angular/core';
import { ArrangeLanguageService } from './mutual/services/arrangeLanguage/arrange-language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'henry-portfolio';

  constructor(private langueService: ArrangeLanguageService) { }

  ngOnInit(): void {
    if(localStorage.getItem('langue') === null || localStorage.getItem('langueObj') === null)
      this.langueService.setLanguage('pt');
  }
}
