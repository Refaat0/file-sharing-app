/**
 * author: Refaat
 * this module exports a load function that initializes the web application
 */
// import environment variables
require('dotenv').config({ path: '.././.env' });

// import libraries
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

// import routers
const fileRouter = require('../routers/file-router');
const viewRouter = require('../routers/view-router');

// import middleware
const errorHandler = require('../middleware/error-handler');

// loading function
const load = (app) => {

    // database connection
    mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/files')
        .then((connection) => console.log('successfully connected to the database!'))
        .catch((error) => console.log('database connection failed'));

    // setup
    app.set('view engine', 'ejs');
    app.use(express.static(path.join(__dirname, '..', 'public')));

    // middleware
    app.use(express.urlencoded({ extended: true }));

    // initialize routers
    app.use(fileRouter);
    app.use(viewRouter);

    // error handling middleware
    app.use(errorHandler);
}


module.exports = { load }