
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OutboxService } from '../services/outbox.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('hamBtn') hamButton: ElementRef;
  mobMenu
 
  darkTheme = true;
  mobileMenu;
 
  selected

  constructor(private sender:OutboxService) { }

  ngOnInit(): void {
  
    this.getCurrentYear();
  }

 


  

  showMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
    if (this.hamButton.nativeElement.classList.contains('open')) {
      this.mobMenu = !this.mobMenu;
    }
  }


  getCurrentYear() {
    let today = new Date();
    let currentYear = today.getFullYear();
    return currentYear;

  }



}
