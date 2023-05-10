const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")

const path = require("path");

const pug = require("pug")

const rootDir = require("./utils/path-helper");
const { readFileSync } = require("fs");

const app = express();

app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.render("home");
})

app.use("/read-notes-left-by-others", require('./router/read-notes-left-by-others'))
app.use("/leave-a-note", require('./router/leave-a-note'));

// app.get("/read-notes-left-by-others", (req, res) => {

//     const noteListBuffer = fs.readFileSync(path.join(rootDir, "note.txt"))

//     const noteList = noteListBuffer.toString().split("\n");

//     console.log(noteList);

//     res.render('read-notes-left-by-others', {
//         notes: noteList
//     })
// })

app.use((req, res) => {
    res.status(404).render('not-found')
})


app.listen(8000, () => {
    console.log("Listening on port 8000...");
})

