const Joi = require("@hapi/joi");

const schemas = {
  create: Joi.object().keys({
    nombre: Joi.string().min(2).max(30).required(),
    categoriaId: Joi.number().integer().positive().required(),
  }),
};

module.exports = { schemas };
