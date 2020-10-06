const bd = require("./../utils/bd");

const getAll = () => bd("docentes").select("nombre");

const getSingle = (id) =>
  bd("docentes").where({ id, habilitado: true }).select("docentes.nombre");

const create = (obj) => bd("docentes").insert(obj);

const modify = (id, obj) => bd("docentes").where({ id }).update(obj);

module.exports = { getSingle, getAll, create, modify };
