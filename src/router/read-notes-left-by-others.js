const router = require("express").Router();

const path = require("path")
const fs = require("fs");
const rootDir = require("../utils/path-helper");

router.get("/", (req, res) => {

    const noteListBuffer = fs.readFileSync(path.join(rootDir, "note.txt"))

    const noteList = noteListBuffer.toString().split("\n");

    res.render('read-notes-left-by-others', {
        notes: noteList
    })
})

module.exports = router;