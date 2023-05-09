import { Component } from '@angular/core';
import { ArrangeLanguageService } from './mutual/services/arrangeLanguage/arrange-language.service';
import { GetCurrentRouteService } from './mutual/services/getCurrentRoute/get-current-route.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'henry-portfolio';

  constructor(private langueService: ArrangeLanguageService, private currentRoute: GetCurrentRouteService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('langue') === null || localStorage.getItem('langueObj') === null)
      this.langueService.setLanguage('pt');

    const url = this.currentRoute.getUrl();

    console.log(url);
  }

  isErrorPageLoaded() {
    const answer = this.currentRoute.activePath('error-page');

    return answer;
  }
}
