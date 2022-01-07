const path = require('path');
const fs = require('fs');
const {uniqId} = require('uniqid');


function createNew (body, noteArr) {
    const newNote = body;

    newNote.id = uniqId()
    noteArr.push(newNote);

    fs.writeFileSync(path.join(__dirname, '../../../db/db.json'),
    JSON.stringify(notes, null, 2));

    return newNote;
}

module.exports = {createNew}