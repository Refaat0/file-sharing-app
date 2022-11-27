/**
 * author: Refaat
 * this module defines a mongoose schematic of a file and,
 * exports a mongoose model of a File
 */
const mongoose = require('mongoose');

// define the file schematic
const fileSchema = mongoose.Schema({
    filename: {
        type: String,
        required: [true, 'a filename is required']
    },

    mimetype: {
        type: String,
        required: [true, 'a mimetype is required']
    },

    buffer: {
        type: Buffer,
        required: [true, 'a buffer is reuquired']
    },

    size: {
        type: Number,
        required: [true, 'a size is reuquired']
    },

    timestamp: {
        type: Date,
        default: new Date()
    }
});


// create & export the File model
const File = mongoose.model('File', fileSchema);
module.exports = File;