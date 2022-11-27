/**
 * author: Refaat
 */
const path = require('path');

/**
 * this utility returns the filename without the extension
 * @param {String} filename ex: frogsarecool.txt 
 */
const getFilename = (filename) => {
    return path.parse(filename).name;
}


module.exports = { getFilename }