const Joi = require("@hapi/joi");
const schemaId = Joi.number().integer().positive().required();
const schemas = {
  create: Joi.object().key({
    cursoId: schemaId.message({
      "any.required": "El campo es obligatorio",
    }),
    modalidadId: schemaId,
    fecha_inicio: Joi.date().require(),
    fecha_fin: Joi.date().require(),
    precio: Joi.number().required(),
    horario: Joi.string().require(),
  }),
};

module.exports = { schemas };
