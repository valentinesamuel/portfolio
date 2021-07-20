import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  darkTheme = true;
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
