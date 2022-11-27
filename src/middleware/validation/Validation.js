/**
 * author: Refaat
 * 
 * this module imports all validation functions & exports them from this file
 */
const { validateFile } = require('./validate-file');
const { validateFilesize } = require('./validate-filesize');
const { validateId } = require('./validate-id');

module.exports = {
    validateFile,
    validateFilesize,
    validateId
}