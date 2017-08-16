import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MongooseService } from './../mongoose.service'

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.css']
})

export class NoteFormComponent implements OnInit {
  @Output() submission = new EventEmitter()
  note_text: string

  constructor(private mongooseService: MongooseService) {}
  ngOnInit() {
    this.note_text = ""
  }
  
  submitForm() {
    let note = {text: this.note_text}
    this.mongooseService.create(note).then(res => { if (!res.errors) {
      console.log("going to emit")
      this.submission.emit()
    }})
  }
}
