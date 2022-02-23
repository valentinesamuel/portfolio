import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  splash
  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.splash = !this.splash;
      this.router.navigate(['/home'])
    }, 4000);
  }
}