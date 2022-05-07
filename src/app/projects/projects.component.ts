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
      name: 'Crown Clothiers',
      stack: ['React', 'Firebase', 'React-Redux'],
      repo: 'https://github.com/valentinesamuel/crown-clothiers',
      liveDemo: 'https://crown-clothiers.netlify.app/'
    },
    {
      name: 'Github Clone',
      stack: ['Javascript', 'Git', 'APIs'],
      repo: 'https://github.com/valentinesamuel/BuyCoins-FE-Application',
      liveDemo: 'https://buycoins-github.netlify.app/'
    },
    {
      name: 'Color Palette Generator',
      stack: ['React', 'Colormind API'],
      repo: 'https://github.com/valentinesamuel/color-palette-generator',
      liveDemo: 'https://random-palette-maker.netlify.app/'
    },
    {
      name: 'Blog Webapp',
      stack: ['React', 'Sanity'],
      repo: 'https://github.com/valentinesamuel/sanity-blog-test',
      liveDemo: 'https://sanitious-blog.netlify.app/'
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
