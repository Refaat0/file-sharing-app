/**
 * author: Refaat
 * this module imports all service functions related to the file resource & exports them in a single file.
 */
const { getAllFiles } = require('./getAllFiles');
const { getFileById } = require('./getFileById');
const { uploadFile } = require('./uploadFile');


module.exports = {
    getAllFiles,
    getFileById,
    uploadFile
}