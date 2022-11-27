/**
 * author: Refaat
 */
const File = require('../../models/File');

/**
 * this service creates a new File object in the database
 * @param {file} file ...
 * @return the created file object
 */
const uploadFile = async (file) => {
    try {
        const uploadedFile = await File.create(file);
        return uploadedFile;
    } catch (error) {
        throw error;
    }
}


module.exports = { uploadFile }