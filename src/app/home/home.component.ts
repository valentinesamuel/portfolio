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


  onSubmit(form) {
    
    console.log(form);
  }

  getCurrentYear() {
    let today = new Date();
    let currentYear = today.getFullYear();
    return currentYear;

  }

  nameErrorAlert() {
    const nameField = this.contactForm.get('name');
    if (nameField.status == "INVALID" && nameField.touched == true && nameField.dirty == true && nameField.value != '') {
      return 'Please enter a valid name ';
    }
    }
  emailErrorAlert() {
    const emailField = this.contactForm.get('email');
    if (emailField.status == "INVALID" && emailField.touched == true && emailField.dirty == true && emailField.value != '') {
      return 'Please enter a valid email ';
    }
    }
  messageErrorAlert() {
    const messageField = this.contactForm.get('message');
    if (messageField.status == "INVALID" && messageField.touched == true && messageField.dirty == true && messageField.value != '') {
      return 'Please add a few more details';
    }
    }

}
