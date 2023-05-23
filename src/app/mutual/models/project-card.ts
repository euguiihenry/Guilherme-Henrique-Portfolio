export interface ProjectCard {
  coverImg: string,
  subtitle: string,
  title: string,
  resume: {
    timeline: string,
    myRole: string,
    tech: string,
    links: {
      github: string,
      source2: string,
    }
  },
  explaining: {
    explain1: string,
    explain2: string,
    explain3: string,
    explain4: string,
  },
  imageUrls: {
    combo1: {
      img1: string,
      img2: string,
    },
    combo2: {
      img1: string,
      img2: string
    }
  }
}

export interface PageTopics {
  glance: string,
  timeline: string,
  my_role: string,
  tech: string,
  links: string,
  first_steps: string,
  details: string,
  learnt: string,
  closeBtn: string
}

export function projectCardDefaultModel() {
  const project: ProjectCard = {
    coverImg: 'path/to/image.jpg',
    subtitle: 'Subtitle',
    title: 'Title',
    resume: {
      timeline: 'Timeline',
      myRole: 'My role on this project',
      tech: 'Technologies on this project',
      links: {
        github: 'https://github.com/example',
        source2: 'https://example.com'
      }
    },
    explaining: {
      explain1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explain2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explain3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      explain4: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    imageUrls: {
      combo1: {
        img1: 'path/to/image1.jpg',
        img2: 'path/to/image2.jpg'
      },
      combo2: {
        img1: 'path/to/image1.jpg',
        img2: 'path/to/image2.jpg'
      }
    }
  }

  return project;
}

export function pageTopicsDefaultModel() {
  const pageTopics: PageTopics = {
    glance: 'Glance',
    timeline: 'Timeline',
    my_role: 'Role',
    tech: 'Tech',
    links: 'Links',
    first_steps: 'Steps',
    details: 'Details',
    learnt: 'Learnt',
    closeBtn: 'Close',
  }

  return pageTopics;
}