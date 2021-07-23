import { Component, OnInit } from '@angular/core';
import { ArchivedProject, Project } from './project-list.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})


export class ProjectsComponent implements OnInit {
  seeOthers = true;
  projectList: Project[] = [
    {
      name: 'Project ',
      stack: ['HTML', 'CSS'],
      repo: 'git-sample1.com',
      liveDemo: 'project1.com'
    },
    {
      name: 'Project ',
      stack: ['JS', 'TS'],
      repo: 'git-sample2.com',
      liveDemo: 'project2.com'
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
