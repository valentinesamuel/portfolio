import { Component, OnInit } from '@angular/core';
import { ArchivedProject, Project } from './project-list.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projectList: Project[] = [
    {
      name: 'Shopaholik',
      stack: [
        'React',
        'Typescript',
        'Redux-Toolkit',
        'Firebase',
        'Firestore',
        'Nestjs',
        'Docker',
        'PostgreSQL',
      ],
      repo: 'https://github.com/valentinesamuel/shopaholik-frontend',
      liveDemo:
        'https://drive.google.com/file/d/1scBh9cvD0ZovqMpLPd9keMkD1la6oZs9/view?usp=sharing',
    },
    {
      name: 'Feems',
      stack: ['React', 'Typescript', 'Redux-Toolkit', 'Firebase', 'Firestore'],
      repo: 'https://github.com/valentinesamuel/redux-movie-app',
      liveDemo: 'https://feemflix.netlify.app/',
    },
    {
      name: 'Booktopia',
      stack: ['Node', 'Express', 'Mongodb', 'AWS'],
      repo: 'https://github.com/valentinesamuel/booktopia-backend',
      liveDemo:
        'https://www.postman.com/lunar-module-technologist-97035210/workspace/alx-project-workspace/collection/14004903-ece0e1c8-1bbc-4329-84d8-f403d2bdd9ef',
    },
    {
      name: 'Sneaker E-Commerce API',
      stack: ['Node', 'Express', 'Cloudinary', 'Mongodb'],
      repo: 'https://github.com/valentinesamuel/sneacker-REST_API',
      liveDemo: 'https://documenter.getpostman.com/view/14004903/2s8ZDVbPY7',
    },
    {
      name: 'Skin Clothiers',
      stack: ['React', 'Firebase', 'React-Redux'],
      repo: 'https://github.com/valentinesamuel/crown-clothiers',
      liveDemo: 'https://skin-clothiers.netlify.app/',
    },
    {
      name: 'Spotify Clone',
      stack: ['Angular', 'Git', 'Spotify API'],
      repo: 'https://github.com/valentinesamuel/music-app',
      liveDemo: 'https://ng-spotify.netlify.app/',
    },
    // {
    //   name: 'Github Clone',
    //   stack: ['Javascript', 'Git', 'APIs'],
    //   repo: 'https://github.com/valentinesamuel/BuyCoins-FE-Application',
    //   liveDemo: 'https://buycoins-github.netlify.app/',
    // },
  ];

  constructor() {}

  ngOnInit(): void {}
}
