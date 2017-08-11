import { Component, OnInit, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit, OnChanges {
  @Input() initial: number
  @Input() multiplier: number
  adjustedLevel: number
  tag: string

  constructor() { }

  ngOnInit() {
      this.adjustLevel()
      this.tag = ""
  }
  ngOnChanges(changes) {
      this.adjustLevel()
      this.tag = this.updateTag(this.adjustedLevel);
  }
  adjustLevel() {
      this.adjustedLevel = this.initial * this.multiplier
  }
  updateTag = adjustedLevel => {
      let tag: string = ""
      if (adjustedLevel > 50000) {
          tag = "The One."
      } else if (adjustedLevel > 20000) {
          tag = "Superlative!!"
      } else if (adjustedLevel > 9000) {
          tag = "Over 9000!"
      }
      console.log("tag has been changed to" + tag)
      return tag
  }
}
