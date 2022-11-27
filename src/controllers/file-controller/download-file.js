/**
 * author: Refaat
 * 
 * this module exports a controller function queries the database,
 * for a File object specified by a mongodb object id the request parameters.
 * once the file is found, it is send to the client to be downloaded.
 */
const FileService = require('../../services/file-service/FileService');
const { getFilename } = require('../../utility/get-filename');

const downloadFile = async (request, response, next) => {
    try {
        // query the database for the client requested file
        const file = await FileService.getFileById(request.params.id);
        console.log('file', file);

        // send the file to the client
        response.setHeader('content-type', file.mimetype);
        response.setHeader('Content-Disposition', 'attachment; filename=' + '"' + getFilename(file.filename) + '"');
        response.send(file.buffer);
    } catch (error) {
        next(error)
    }
}


module.exports = { downloadFile }