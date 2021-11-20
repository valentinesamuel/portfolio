import { Component, OnInit } from '@angular/core';
import { ArchivedProject, Project } from './project-list.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent implements OnInit {
  seeOthers = false;
  projectList: Project[] = [
    {
      name: 'Spotify Clone ',
      stack: [ 'Angular', 'APIs'],
      repo: 'https://github.com/valentinesamuel/music-app',
      liveDemo: 'https://ng-spotify.netlify.app/'
    },
    {
      name: 'Github Clone',
      stack: ['Javascript', 'APIs'],
      repo: 'https://github.com/valentinesamuel/BuyCoins-FE-Application',
      liveDemo: 'https://buycoins-github.netlify.app/'
    },
    {
      name: 'Joke Generator',
      stack: ['Javascript', 'APIs'],
      repo: 'https://github.com/valentinesamuel/jokes-generator',
      liveDemo: 'https://funny-jokes.netlify.app/'
    },
  ]
  archivedList: ArchivedProject[] = [
    {
      name: 'Foodie Landing Page',
      repo: 'https://github.com/valentinesamuel/Foodie-website',
      livePage: 'https://condes.netlify.app/',
    },
    {
      name: 'Ghanzu Web App',
      repo: 'https://github.com/valentinesamuel/ghanzu',
      livePage:'https://ghanzu.netlify.app/',
    },
    {
      name: 'Zou Farms Landing Page',
      repo: 'https://github.com/valentinesamuel/Zou-farm-landing-page',
      livePage:'https://farmzou.netlify.app/',
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

  seeOtherProjects() {
    this.seeOthers = !this.seeOthers;
  }
}
