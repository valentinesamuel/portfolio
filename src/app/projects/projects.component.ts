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
      stack: [ 'Angular', 'Git', 'APIs'],
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
      name: 'Project ',
      stack: ['BASH', 'UID'],
      repo: 'git-sample3.com',
      liveDemo: 'project3.com'
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  
}
