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
  archivedList: ArchivedProject[] = [
    {
      name: 'yehhh',
      repo:'yehh.github.com'
    },
    {
      name: 'yewrthe',
      repo:'yewrthe.github.com'
    },
    {
      name: 'sldfib9mgtfb',
      repo:'sldfib9mgtfb.github.com'
    },
    {
      name: 'slkdmf',
      repo:'slkdmf.github.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  seeOtherProjects() {
    this.seeOthers = !this.seeOthers;
  }
}
