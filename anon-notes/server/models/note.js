const mongoose = require('mongoose')

let NoteSchema = new mongoose.Schema({
    text : {
      type: String,
      required: true,
      minlength: 3
    }
  }, { timestamps: {createdAt: 'created_at'}})

let Note = mongoose.model("Note", NoteSchema)
