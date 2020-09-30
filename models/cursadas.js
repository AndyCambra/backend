const bd = require("./../utils/bd");
const T = require("./../utils/schemas");

const create = (obj) => bd("cursadas").insert(obj);

const get = (conditions = true) => {
  bd("cursadas")
    .join("cursos", "cursadas.cursoId", "curso.id")
    .join("modalidades", "cursadas.modalidadId", "modalidades.id")
    .join("docentes", "cursadas.docentesId", "docentes.id")
    .join("categorias", "cursos.idCategoria", "categorias.id")
    .where({ "cursadas.habilitado": true, ...conditions })
    .select(
      "cursadas.fecha_inicio",
      "cursada.fecha_fin",
      "cursada.horario",
      "categorias.nombre as nombreCategoria",
      "modalidades.nombre as nombreModalidad",
      "docentes.nombre as nombreDocente",
      "docentes.apellido as apellidoDocente",
      "cursos.nombre as nombreCurso"
    );
};

const single = (id) => get({ "cursada.id": id });
const all = () => get();

module.exports = { create, all, single };
