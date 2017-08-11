import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  powerLevel: number
  selectedLevel: number

  constructor() {
  }

  ngOnInit() {
      this.powerLevel = 0
      this.selectedLevel = 0
  }

  calculatePower = () => {
      this.powerLevel = this.selectedLevel
  }

}
