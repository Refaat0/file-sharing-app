/**
 * author: Refaat
 * this module exports a Joi schematic of a file
 */
const Joi = require('joi');

const fileSchematic = Joi.object({
    filename: Joi.string().required(),
    mimetype: Joi.string().required(),
    buffer: Joi.binary().required(),
    size: Joi.number().required(),
});


module.exports = fileSchematic;