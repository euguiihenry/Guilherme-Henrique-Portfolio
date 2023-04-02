import { Component } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})
export class AcademicComponent {
  public objectStr = {
    title: '',
    description1: '',
    description2: ''
  }

  defineLangue() {
    const langueStr = localStorage.getItem('langueObj');
    
    if (langueStr) {
      try {
        const langueObj = JSON.parse(langueStr);

        this.objectStr.title = langueObj.academic.title;
        this.objectStr.description1 = langueObj.academic.description1;
        this.objectStr.description2 = langueObj.academic.description2;
        
      } catch (e) {
        console.error('Failed to parse localStorage item: ', e);
      }
    }
  }

  ngOnInit(): void {
    this.defineLangue();
  }
}
