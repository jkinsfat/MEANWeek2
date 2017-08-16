import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MongooseService } from './mongoose.service';

import { AppComponent } from './app.component';
import { NoteFormComponent } from './note-form/note-form.component';
import { NoteListItemComponent } from './note-list-item/note-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteFormComponent,
    NoteListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MongooseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
