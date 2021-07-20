import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;
  darkTheme = true;

  seeOthers = true;
  company: any = 'freelance';
  selected

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
    this.getCurrentYear();
  }

  selectCompany(id: any) {
    this.company = id;
    this.selected = !this.selected;
  }

  seeOtherProjects() {
    this.seeOthers = !this.seeOthers;
  }

  onSubmit() {

  }

  getCurrentYear() {
    let today = new Date();
    let currentYear = today.getFullYear();
    return currentYear;

  }

}
