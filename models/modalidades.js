const bd = require("./../utils/bd");

const getAll = () => bd("modalidades").select("nombre");

const getSingle = (id) =>
  bd("modalidades")
    .where({ id, habilitado: true })
    .select("modalidades.nombre");

const create = (obj) => bd("modalidades").insert(obj);

const modify = (id, obj) => bd("modalidades").where({ id }).update(obj);

module.exports = { getSingle, getAll, create, modify };
