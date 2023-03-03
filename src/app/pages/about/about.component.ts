import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  phrases = [
    'phrase1',
    'phrase2',
    'phrase3'
  ];
}
