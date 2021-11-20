import { Component, OnInit } from '@angular/core';
import { ArchivedProject, Project } from './project-list.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent implements OnInit {

  projectList: Project[] = [
    {
      name: 'Spotify Clone ',
      stack: ['Angular', 'Git', 'Spotify API'],
      repo: 'https://github.com/valentinesamuel/music-app',
      liveDemo: 'https://ng-spotify.netlify.app/'
    },
    {
      name: 'Github Clone',
      stack: ['Javascript', 'Git', 'APIs'],
      repo: 'https://github.com/valentinesamuel/BuyCoins-FE-Application',
      liveDemo: 'https://buycoins-github.netlify.app/'
    },
    {
      name: 'Joke Generator',
      stack: ['Javascript', 'APIs'],
      repo: 'https://github.com/valentinesamuel/jokes-generator',
      liveDemo: 'https://funny-jokes.netlify.app/'
    },
    {
      name: 'Ghanzu Web App',
      stack: ['Javascript', 'APIs', 'Firebase'],
      repo: 'https://github.com/valentinesamuel/ghanzu',
      liveDemo: 'https://ghanzu.netlify.app/'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
