const Joi = require("@hapi/joi");
const schemaId = Joi.number().integer().positive().required();

const schemas = {
  create: Joi.object().keys({
    cursoId: schemaId,
    modalidadId: schemaId,
    fecha_inicio: Joi.date().required(),
    fecha_fin: Joi.date().optional(),
    precio: Joi.number().required(),
    horario: Joi.string().required(),
  }),

  modify: Joi.object().keys({
    id: schemaId,
    cursoId: schemaId,
    modalidadId: schemaId,
    fecha_inicio: Joi.date().required(),
    fecha_fin: Joi.date().optional(),
    precio: Joi.number().required(),
    horario: Joi.string().required(),
  }),
};

module.exports = { schemas };
