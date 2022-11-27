/**
 * author: Refaat
 */
const File = require('../../models/File');
const ServiceError = require('../../utility/ServiceError');

/**
 * this service queries the datbase for a File object specified by
 * a monogdb object id
 * @param {String} _id the monogdb object id of the File
 * @return a File object
 */
const getFileById = async (_id) => {
    try {
        // query the database for the specified file
        const file = await File.findOne({ _id });

        // check if the file even exists
        if (file == null) {
            throw new ServiceError('the file you are looking for does not exist', 400);
        }

        // return file
        return file;
    } catch (error) {
        throw error;
    }
}


module.exports = { getFileById }
