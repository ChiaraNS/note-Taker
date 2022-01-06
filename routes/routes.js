const path = require("path");
const fs = require("fs");
const router = require("express").Router;
const uniqId = require("uniqid");
const { noteArr } = require("../db/db.json");

//GET /api/notes db.json route
     router.get("/api/notes", (req, res) => {
         res.json(noteArr);
     });

//POST /api/notes   receive new note and add to db.json
    router.post("/api/notes", (req, res) => {
        req.body.id = uniqId();

        const createNew = (body, noteArr) => {
            const createNote = body;
            noteArr.push(createNew);

            fs.writeFileSync(path.join(__dirname, "../db/db.json"),
            JSON.stringify({ noteArr }, null, 2));

            return createNote;
        }

        let newNote = createNew(req.body, noteArr);
        res.JSON(newNote);
    });

//GET /notes note.html route

    router.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

//Get * index.html route

   router.get("*", (req, res) => {
       res.sendFile(path.join(__dirname, "../public/index.html"));
   });

module.exports = router;