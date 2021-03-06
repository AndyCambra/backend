const Joi = require("@hapi/joi");

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(30).required(),
    categoriaId: Joi.number().integer().positive().required(),
  }),
  modify: Joi.object().keys({
    id: Joi.number().integer().positive().required(),
    nombre: Joi.string().min(2).max(30).optional(),
    categoriaId: Joi.number().integer().positive().optional(),
  }),
};

module.exports = { schemas };
