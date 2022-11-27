/**
 * author: Refaat
 */
const FileService = require('../../services/file-service/FileService');

/**
 * author: Refaat
 * this controller renders the EJS download view
 */
const renderDownlaodView = async (request, response, next) => {
    try {
        const files = await FileService.getAllFiles();
        response.render('download', { files });
    } catch (error) {
        throw error;
    }
}


module.exports = { renderDownlaodView }