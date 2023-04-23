import { Component, OnInit } from '@angular/core';
import { SiteLanguageService } from './common/services/site-language/site-language.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'henry-portfolio';

  constructor(private langueService: SiteLanguageService, private http: HttpClient) {}

  ngOnInit(): void {
    if(localStorage.getItem('langue') === null || localStorage.getItem('langueObj') === null) {
      this.langueService.setLanguage('pt');
    }

    this.getInfo().subscribe(info => {
      console.log(info);
    })

    this.getProjects().subscribe(projects => {
      console.log(projects);
    });

  }

  getInfo() {
    return this.http.get('https://guilhermehenrique.vercel.app/api/getAbout');
  }

  getProjects() {
    return this.http.get('http://localhost:3000/api/getProjects');
  }
}
