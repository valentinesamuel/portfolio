import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OutboxService } from '../services/outbox.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  constructor(private sender: OutboxService) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      message: new FormControl(null, [Validators.required, Validators.minLength(10)])
    });
  }
  onSubmit(form) {
    // this.sender.sendMessage(form)
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
