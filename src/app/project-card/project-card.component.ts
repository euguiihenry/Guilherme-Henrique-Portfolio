import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  constructor(public projects: ProjectsComponent) { }

  project = {
    imageUrl: 'path/to/image.jpg',
    subtitle: 'Subtitle',
    title: 'Title',
    headings: {
      heading1: 'Timeline',
      heading2: 'Second Heading',
      heading3: 'Third Heading'
    },
    paragraphs: {
      paragraph1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      paragraph3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    timeline: 'One month',
    myRole: 'UI/UX Designer, Code Developer',
    tech: 'Figma, HTML, SASS & JS',
    links: 'https://github.com/example, https://example.com',
    imageUrls: {
      imageUrl1: 'path/to/image1.jpg',
      imageUrl2: 'path/to/image2.jpg'
    }
  }
}
