const Joi = require('joi');

const messageValidatorSchema = Joi.object({
    user: Joi.string().min(3).required(),
    message: Joi.string().min(3).required()
});

module.exports = messageValidatorSchema;