const path = require('path');
const fs = require('fs');
const express = require('express');
const { createNew } = require('../db/js/script');
const router = require('express').Router();
const uniqid = require('uniqid');
const notes = require('../db/db.json');

//GET /api/notes db.json route
    router.get('/api/notes', (req, res) => {
        console.log(notes)
         res.json(notes);
     });

//POST /api/notes   receive new note and add to db.json
    router.post('/api/notes', (req, res) => {
        req.body.id = uniqid();

        let newNote = createNew(req.body, notes);
        res.json(newNote);
    });

//GET /notes note.html route

    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

//Get * index.html route

   router.get('*', (req, res) => {
       res.sendFile(path.join(__dirname, "../public/index.html"));
   });

module.exports = router 