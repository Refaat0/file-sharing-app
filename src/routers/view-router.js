/**
 * author: Refaat
 * this module exports a router for the EJS views
 */
const express = require('express');
const router = express.Router();

// import controller functions
const ViewController = require('../controllers/view-controller/ViewController');

/** EJS routes  **/
router.get('/views/files/download', ViewController.renderDownlaodView);
router.get('/views/files/upload', ViewController.renderUploadView);


module.exports = router;