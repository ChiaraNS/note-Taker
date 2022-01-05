const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.json());

app.use('/', require('./routes/routesHtml'));
app.use('/api', require('./routes/routesApi'));

app.listen(PORT), () => {
    console.log(`API is running on port ${PORT}`);
}