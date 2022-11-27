/**
 * author: Refaat
 * this module exports a ServiceError class that can be thrown
 * by the service layer
*/
class ServiceError extends Error {
    /**
     * user generated constructor
     * @param {String} message the error message
     * @param {String} statuscode a HTTP status code
     */
    constructor(message, statuscode) {
        super(message);
        this.statuscode = statuscode;
    }
}


module.exports = ServiceError;