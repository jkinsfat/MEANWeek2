import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MongooseService } from './../mongoose.service'
@Component({
  selector: 'app-note-list-item',
  templateUrl: './note-list-item.component.html',
  styleUrls: ['./note-list-item.component.css']
})
export class NoteListItemComponent implements OnInit {
  @Input() note
  @Output() deletion = new EventEmitter()
  constructor(private mongooseService: MongooseService) { }

  ngOnInit() {
  }

  deleteNote() {
    this.mongooseService.destroy(this.note._id).then( res => { this.deletion.emit() })
  }
}
