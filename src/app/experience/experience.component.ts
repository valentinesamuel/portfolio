import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  company: any = 'freelance';
  selected
  constructor() { }

  ngOnInit(): void {
  }
  selectCompany(id: any) {
    this.company = id;
    this.selected = !this.selected;
  }
}
