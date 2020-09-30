const bd = require("./../utils/bd");

const getAll = () => bd("cursos").select("nombre");
// select * from personas trae todos los campos

const getSingle = (id) =>
  bd("cursos")
    .join("categorias", "cursos.categoriaId", "categorias.id")
    .where("cursos.id", id)
    .select("cursos.nombre", "categorias.nombre as nombreCategoria");

const create = (obj) => bd("cursos").insert(obj);

const modify = (id, obj) => bd('cursos').where({id}).update(obj);

module.exports = { getSingle, getAll, create, modify };
