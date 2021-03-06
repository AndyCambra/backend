const Joi = require("@hapi/joi");

const { schemas } = require("./schemas/docentes");

const validateCreate = (req, res, next) => {
  const { error, value } = schemas.create.validate(req.body);

  error ? res.status(422).json({ error: error.details[0].message }) : next();
};
const validateModify = (req, res, next) => {
  const obj = {
    ...req.body,
    ...req.params,
  };
  const { error, value } = schemas.modify.validate(req.body);
  error ? res.status(422).json({ error: error.details[0].message }) : next();
};
module.exports = { validateCreate, validateModify };
