const router = require("express").Router();
const path = require("path")
const fs = require("fs");
const rootDir = require("../utils/path-helper");

router.get("/", (req, res) => {
    res.render('leave-a-note')
})

router.post("/", (req, res) => {
    const {note} = req.body;
    const noteListBuffer = fs.readFileSync(path.join(rootDir, "note.txt"))
    let noteList = noteListBuffer.toString();
    noteList = noteList + `${note}\n`;
    fs.writeFileSync(path.join(rootDir, "note.txt"), noteList, (err) => {
        if(err) {
            console.log(err);
            return
        }
    })

    res.redirect("/")
})

module.exports = router;