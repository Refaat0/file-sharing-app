/**
 * author: Refaat
 * 
 * this module exports a middleware function that validates the
 * incoming File objects filesize is under the accepted limit
 * 
 * the limit is specified in MAX_UPLOAD_SIZE; todo: move this variable to config or smthing
 */
const MAX_UPLOAD_SIZE = 1e+7; // 10mb

const validateFilesize = (request, response, next) => {
    try {
        // get filesize for request.file
        const filesize = request.file.size;

        // filesize too big. send error
        if (filesize > MAX_UPLOAD_SIZE) {
            throw new Error('you file is too big!');
        }

        // filesize is under the limit. continue
        next();
    } catch (error) {
        throw error;
    }
}


module.exports = { validateFilesize };