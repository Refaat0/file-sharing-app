/**
 * author: Refaat
 * this module exports a router for the file resource
 */
const router = require('express').Router();

// import file controller functions
const FileController = require('../controllers/file-controller/FileController');

// import validation middleware
const Validation = require('../middleware/validation/Validation');

// import multer
const Multer = require('../middleware/Multer');


/** file api routes  **/
router.post('/api/files/download/:id',
    Validation.validateId,
    FileController.downloadFile
);

router.post('/api/files/upload', 
    Multer.single('file'),
    Validation.validateFile,
    Validation.validateFilesize,
    FileController.uploadFile
);


module.exports = router;