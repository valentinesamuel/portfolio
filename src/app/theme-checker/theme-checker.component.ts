import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-theme-checker',
  templateUrl: './theme-checker.component.html',
  styleUrls: ['./theme-checker.component.scss']
})
export class ThemeCheckerComponent implements OnInit {
  @Output() changeTheme: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  send() {
    this.changeTheme.emit('change');
}
}
