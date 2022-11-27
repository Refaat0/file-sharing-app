/**
 * author: Refaat
 * 
 * this module exports a middleware function that validates that the
 * request.params.id is a mongodb object id
 */
const ObjectId = require('mongoose').Types.ObjectId;

const validateId = (request, response, next) => {
    try {
        if (ObjectId.isValid(request.params.id)) {
            return next();
        }
        throw Error('Invalid Id!');
    } catch (error) {
        throw error;
    }
}


module.exports = { validateId }