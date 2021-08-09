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
      name: 'yehhh',
      repo: 'yehh.github.com'
    },
    {
      name: 'yewrthe',
      repo: 'yewrthe.github.com'
    },
    {
      name: 'sldfib9mgtfb',
      repo: 'sldfib9mgtfb.github.com'
    },
    {
      name: 'slkdmf',
      repo: 'slkdmf.github.com'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  seeOtherProjects() {
    this.seeOthers = !this.seeOthers;
  }
}
