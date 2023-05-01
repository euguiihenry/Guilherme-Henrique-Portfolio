import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public objectStr = {
    upperTitle: '',
    name: '',
    description: '',
    projectBtn: '',
    academicBtn: '',
  }

  defineLangue() {
    const langueStr = localStorage.getItem('langueObj');

    if (langueStr) {
      try {
        const langueObj = JSON.parse(langueStr);

        this.objectStr.upperTitle = langueObj.home.upperTitle;
        this.objectStr.name = langueObj.home.name;
        this.objectStr.description = langueObj.home.description;
        this.objectStr.projectBtn = langueObj.home.projectBtn;
        this.objectStr.academicBtn = langueObj.home.academicBtn;

      } catch (e) {
        console.error('Failed to parse localStorage item: ', e);
      }
    }
  }

  ngOnInit(): void {
    this.defineLangue();
  }
}
