/**
 * author: Refaat
 * 
 * this module imports all controller functions related to the file resource and exports them from this file
 */
const { downloadFile } = require('./download-file');
const { uploadFile } = require('./upload-file');

module.exports = {
    downloadFile,
    uploadFile
}