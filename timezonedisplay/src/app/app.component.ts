import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  datetime
  selectedButton: string

  constructor() {
  }

  castToPST = () => {
      this.selectedButton = 'PST'
      this.datetime = new Date();
  }
  castToMST = () => {
      this.selectedButton = 'MST'
      this.datetime = new Date();
  }
  castToCST = () => {
      this.selectedButton = 'CST'
      this.datetime = new Date();
  }
  castToEST = () => {
      this.selectedButton = 'EST'
      this.datetime = new Date();
  }
  clear = () => {
      this.selectedButton = ''
      this.datetime = undefined
  }

}
