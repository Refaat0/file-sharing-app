/**
 * author: Refaat
 * 
 * this module exports a controller function that takes in a client provided file
 * from the request.file object & extracts the necessary data to create a File object.
 * after the File object is created, it is inserted into the database.
 */
const FileService = require('../../services/file-service/FileService');

const uploadFile = async (request, response, next) => {
    try {
        // create a file object from the request.file object
        const File = {
            filename: request.file.originalname,
            mimetype: request.file.mimetype,
            buffer: request.file.buffer,
            size: request.file.size
        }

        // insert file to the database
        const uploadedFile = FileService.uploadFile(File);

        // successful response; redirect to a view
        return response.redirect('/views/files/download');
    } catch (error) {
        // passes error the the error-handler, middleware function
        next(error)
    }
}


module.exports = { uploadFile }