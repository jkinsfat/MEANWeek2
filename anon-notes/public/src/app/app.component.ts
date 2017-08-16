import { Component } from '@angular/core';
import { MongooseService } from './mongoose.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes = []
  constructor(private mongooseService: MongooseService) {
    this.reloadNotes()
  }

  reloadNotes() {
    console.log("Going to reload dem notes")
    this.mongooseService.retrieveAll().then( res => {
      this.notes = res.reverse()})
  }
}
