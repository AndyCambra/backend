const Joi = require("@hapi/joi");
const schemaId = Joi.string().min(2).max(30).required();

const schemas = {
  create: Joi.object().keys({
    nombre: schemaId,
    apellido: schemaId,
  }),
  modify: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(2).max(30).optional(),
    apellido: Joi.string().min(2).max(30).optional(),
  }),
};

module.exports = { schemas };
