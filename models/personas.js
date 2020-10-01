const bd = require('./../utils/bd')

const getAll = () =>
  bd('personas').select('id', 'nombre', 'apellido', 'telefono', 'mail')
// select * from personas trae todos los campos

const getSingle = (id) =>
  bd('personas')
    .where({ id, habilitado: true })
    .select('id', 'nombre', 'apellido', 'mail', 'telefono')

const create = (obj) => bd('personas').insert(obj)

const modify = (id, obj) => bd('personas').where({ id }).update(obj)

module.exports = { getAll, getSingle, create, modify }
