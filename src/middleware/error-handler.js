/**
 * author: Refaat
 * this moudle exports a middleware function that handles **most** errors
 */
const path = require('path');

const errorHandler = (error, request, response, next) => {
    try {
        return response.render('error', { error });
    } catch (error) {
        response.status(500).json({ error: 'something went wrong on our side...' });
    }
}


module.exports = errorHandler;