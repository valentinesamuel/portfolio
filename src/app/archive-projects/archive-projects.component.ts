import { Component, OnInit } from '@angular/core';
import { ArchivedProject } from '../projects/project-list.model';

@Component({
  selector: 'app-archive-projects',
  templateUrl: './archive-projects.component.html',
  styleUrls: ['./archive-projects.component.scss']
})
export class ArchiveProjectsComponent implements OnInit {
  seeOthers = false;

  archivedList: ArchivedProject[] = [
     {
      name: 'Movie Search App',
      repo: 'https://github.com/valentinesamuel/mytest-app',
      livePage: 'http://mytest-app.vercel.app/'
    },
    {
      name: 'Testimonial App',
      repo: 'https://github.com/valentinesamuel/vasiti-web-application',
      livePage: 'http://vasiti-web-application.vercel.app/'
    },
    {
      name: 'Zou Farms Landing Page',
      repo: 'https://github.com/valentinesamuel/Zou-farm-landing-page',
      livePage: 'https://farmzou.netlify.app/'
    },
    {
      name: 'EHR Health Service',
      repo: 'https://lawpavillion-ehr.vercel.app/auth',
      livePage: 'https://github.com/valentinesamuel/lawpavillion-ehr'
    },
    {
      name: 'Color Palette Generator',
      repo: 'https://github.com/valentinesamuel/color-palette-generator',
      livePage: 'https://random-palette-maker.netlify.app/'
    },
    {
      name: 'Ghanzu Web App',
      repo: 'https://github.com/valentinesamuel/ghanzu',
      livePage: 'https://ghanzu.netlify.app/'
    },
    {
      name: 'Architecture Portfolio',
      repo: 'https://github.com/valentinesamuel/archi-portfolio',
      livePage: 'https://michvalarchitects.netlify.app/'
    },
    {
      name: 'Foodie Landing Pagge',
      repo: 'https://github.com/valentinesamuel/Foodie-website',
      livePage: 'https://condes.netlify.app/'
    },
   

  ]
  constructor() { }

  ngOnInit(): void {
  }
  seeOtherProjects() {
    this.seeOthers = !this.seeOthers;
  }
}
