import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  darkTheme = false;
  company: any = 'mission';
  selected

  constructor() { }

  ngOnInit(): void {
  }

  selectCompany(id: any) {
    this.company = id;
    this.selected = !this.selected;

  }


}
