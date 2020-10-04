const bd = require("./../utils/bd");
const T = require("./../utils/schemas");

const create = (obj) => bd("cursadas").insert(obj);

const get = (conditions = true) => {
  return bd("cursadas")
    .join("cursos", "cursadas.cursoId", "cursos.id")
    .join("modalidades", "cursadas.modalidadId", "modalidades.id")
    .join("docentes", "cursadas.docenteCursadaId", "docentes.id")
    .join("categorias", "cursos.categoriaId", "categorias.id")
    .where({ "cursadas.habilitado": true, ...conditions })
    .select(
      "cursadas.fecha_inicio",
      "cursadas.fecha_fin",
      "cursadas.horario",
      "categorias.nombre as nombreCategoria",
      "modalidades.nombre as nombreModalidad",
      "docentes.nombre as nombreDocente",
      "docentes.apellido as apellidoDocente",
      "cursos.nombre as nombreCurso"
    );
};

const single = (id) => get({ "cursadas.id": id });
const all = () => get();
const modify = (id, obj) => bd("cursadas.id").where({ id }).update(obj);

module.exports = { create, all, single, modify };
