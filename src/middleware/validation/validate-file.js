/**
 * author: Refaat
 * 
 * this module exports a middleware function that:
 * 1. creates a File object from the request.file object
 *  - the File object must match the File models mongoose schematic,
 *    as it will be inserted into the database in the service-layer
 * 2. validates the File object with the Joi file-schematic
 */
const fileSchematic = require('../../schematics/file-schematic');
const ServiceError = require('../../utility/ServiceError');

const validateFile = (request, response, next) => {
    try {
        // check if request.file is null
        if (request.file === undefined) {
            throw new ServiceError('a file is required!', 400);
        }

        // create a file object
        const File = {
            filename: request.file.originalname,
            mimetype: request.file.mimetype,
            buffer: request.file.buffer,
            size: request.file.size
        }

        // try to validate the File against the Joi file schematic
        const result = fileSchematic.validate(File);

        // if error is not in the result object then the validation has passed
        if (result.error === undefined) {
            // success
            return next();
        } else {
            return response.status(400).json({
                msg: result.error.message
            });
        }
    } catch (error) {
        throw error;
    }
}


module.exports = { validateFile }