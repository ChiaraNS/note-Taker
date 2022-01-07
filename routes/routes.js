const path = require('path');
const fs = require('fs');
const express = require('express');
const { createNew } = require('../public/assets/js/script');
const { noteArr } = require('../db/db.json');


module.exports = router => {
    fs.readFile('./db/db.json', (err, data) => {

        if (err) throw err;
        
        const notes = JSON.parse(data);

//GET /api/notes db.json route
    router.get('/api/notes', (req, res) => {
         res.json(notes);
     });

//POST /api/notes   receive new note and add to db.json
    router.post('/api/notes', (req, res) => {
        req.body.id = uniqId();

        let newNote = createNew(req.body, noteArr);
        res.json(newNote);
    });

//GET /notes note.html route

    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

//Get * index.html route

   router.get('*', (req, res) => {
       res.sendFile(path.join(__dirname, "../public/index.html"));
   });
})
}
