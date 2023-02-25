import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  items = [
    {
      title: 'Square 1',
      subtitle: 'Subtitle for Square 1',
      description: 'Description for Square 1',
      imgSrc: 'https://via.placeholder.com/400x400'
    },
    {
      title: 'Square 2',
      subtitle: 'Subtitle for Square 2',
      description: 'Description for Square 2',
      imgSrc: 'https://via.placeholder.com/400x400'
    },
    {
      title: 'Square 3',
      subtitle: 'Subtitle for Square 3',
      description: 'Description for Square 3',
      imgSrc: 'https://via.placeholder.com/400x400'
    },
    {
      title: 'Square 4',
      subtitle: 'Subtitle for Square 4',
      description: 'Description for Square 4',
      imgSrc: 'https://via.placeholder.com/400x400'
    }
  ];
}
