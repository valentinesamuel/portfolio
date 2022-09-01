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
      name: 'Feems',
      stack: ['React', 'Typescript', 'Redux-Toolkit', 'Firebase', 'Firestore'],
      repo: 'https://github.com/valentinesamuel/redux-movie-app',
      liveDemo: 'https://feemflix.netlify.app/'
    },
    {
      name: 'Skin Clothiers',
      stack: ['React', 'Firebase', 'React-Redux'],
      repo: 'https://github.com/valentinesamuel/crown-clothiers',
      liveDemo: 'https://skin-clothiers.netlify.app/'
    },
    {
      name: 'Spotify Clone ',
      stack: ['Angular', 'Git', 'Spotify API'],
      repo: 'https://github.com/valentinesamuel/music-app',
      liveDemo: 'https://ng-spotify.netlify.app/'
    },
    {
      name: 'Blog Webapp',
      stack: ['React', 'Sanity'],
      repo: 'https://github.com/valentinesamuel/sanity-blog-test',
      liveDemo: 'https://sanitious-blog.netlify.app/'
    },
    {
      name: 'Github Clone',
      stack: ['Javascript', 'Git', 'APIs'],
      repo: 'https://github.com/valentinesamuel/BuyCoins-FE-Application',
      liveDemo: 'https://buycoins-github.netlify.app/'
    }

  ]

  constructor() { }

  ngOnInit(): void {
  }


}
