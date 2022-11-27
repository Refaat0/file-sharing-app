/**
 * author: Refaat
 * this module is the starting point of the web application
 */
// setup 🔧
const express = require('express');
const app = express();

// initialize the web application 🤖
const loader = require('./utility/loader');
loader.load(app);

// hello, world 👋
app.get('/', (request, response) => {
    response.redirect('/views/files/upload');
});

// open port 🐸
app.listen(process.env.PORT || 3000, () => {
    console.log(`listeing @ http://localhost:${process.env.PORT || 3000}`);
});