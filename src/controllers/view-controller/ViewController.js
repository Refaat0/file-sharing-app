/**
 * author: Refaat
 * 
 * this module imports all controller functions related to rendering views & exports them from this file
 */
const { renderDownlaodView } = require('./renderDownloadView');
const { renderUploadView } = require('./renderUploadView');

module.exports = {
    renderDownlaodView,
    renderUploadView
}