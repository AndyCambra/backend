const bd = require("./../utils/bd");

const getAll = () =>
  bd("categorias").where({ habilitado: 1 }).select("id", "nombre");

const create = (obj) => bd("categorias").insert(obj);

const modify = (id, obj) => bd("categorias").where({ id }).update(obj);

module.exports = { getAll, create, modify };
