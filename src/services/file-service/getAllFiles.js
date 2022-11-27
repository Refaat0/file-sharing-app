/**
 * author: Refaat
 */
const File = require('../../models/File');

/**
 * this service queries the database for an array of File objects
 * @return an array of file objects
 * todo: pagination
 */
const getAllFiles = async () => {
    try {
        const files = await File.find();
        return files;
    } catch (error) {
        throw error;
    }
}


module.exports = { getAllFiles }