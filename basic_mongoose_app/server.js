var express = require("express");
var app = express();
var path = require("path");
var bodyparser = require("body-parser");

var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.Promise = global.Promise;
mongoose.model("Users", UserSchema);
var User = mongoose.model("Users");

mongoose.connect("mongodb://localhost/basic_mongoose");

app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./static")));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
            res.render("index", {error : err, users : "No Users Found"});
        }
        res.render("index", {error : "", users : users})
    })
})

app.post("/users", (req, res) => {
    console.log("POST data", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(err => {
        if (err) {
            console.log("something went wrong");
        } else {
            console.log("successfully added a user!");
            res.redirect("/");
        }
    })
})

app.listen(7999, () => {
    console.log('listening on port 7999');
})
