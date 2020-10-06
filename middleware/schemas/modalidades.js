const Joi = require("@hapi/joi");

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(30).required(),
    descripcion: Joi.string().optional(),
  }),
  modify: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(2).max(30).optional(),
    descripcion: Joi.string().optional(),
  }),
};

module.exports = { schemas };
