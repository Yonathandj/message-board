const Joi = require('joi');

const messageValidatorSchema = Joi.object({
    user: Joi.string().alphanum().min(3).required(),
    message: Joi.string().alphanum().min(3).required()
});

module.exports = messageValidatorSchema;