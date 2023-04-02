import { Component, OnInit } from '@angular/core';
import { SiteLanguageService } from './common/services/site-language/site-language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'henry-portfolio';

  constructor(private langueService: SiteLanguageService) {}

  ngOnInit(): void {
    if(localStorage.getItem('langue') == null) {
      this.langueService.setLanguage('pt');
    }
  }
}
