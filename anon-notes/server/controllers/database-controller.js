const mongoose = require('mongoose')
let Note = mongoose.model('Note')

module.exports = {
  index : (req, res) => {
    console.log("getting all notes")
    Note.find({}).then(allNotes => res.json(allNotes)).catch(error => console.log(error))
  },
  create : (req, res) => {
    let newNote = new Note({ text: req.body.text })
    console.log("success")
    let errors = false
    newNote.save(err => {
      if (err) {
        errors = true
      }}).then(res.json({errors : errors}))
  },
  show : () => {

  },
  update : () => {

  },
  delete : (req, res) => {
    console.log(req.params.id)
    Note.remove({ _id : req.params.id }, err => {
      if (err) {
        res.json({ errors : err })
      } else {
        res.json({errors : "NO errors made"})
      }
    })
  }
}
