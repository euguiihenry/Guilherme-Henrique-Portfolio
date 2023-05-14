import { Component } from '@angular/core';
import { ArrangeLanguageService } from './mutual/services/arrangeLanguage/arrange-language.service';
import { GetCurrentRouteService } from './mutual/services/getCurrentRoute/get-current-route.service';
import { Router } from '@angular/router';
import { ArrangeLoadingService } from './mutual/services/arrangeLoading/arrange-loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'henry-portfolio';


  constructor(private langueService: ArrangeLanguageService, private currentRoute: GetCurrentRouteService, private router: Router, public loading: ArrangeLoadingService) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('langue') === null || localStorage.getItem('langueObj') === null)
      this.langueService.setLanguage('pt');

    const url = this.currentRoute.getUrl();

    this.currentRoute.hasRouteChanged();
  }

  isErrorPageLoaded() {
    const answer = this.currentRoute.activePath('error-page');

    return answer;
  }
}
