const express = require('express')
const router = express.Router()
const service = require('./../models/personas')
const middlewares = require('./../middleware/personas')
//acciones
// mostrar todas las personas
//mostrar una
//dar de alta una
//modificar una

const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e))

const single = async (req, res) => {
  try {
    const { id } = req.params
    const [result] = await service.getSingle(id)
    res.json(result)
  } catch (e) {
    res.status(500).json(e)
  }
}

const create = (req, res) =>
  service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e))

const modify = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e))

router.get('/all', all)
router.get('/single/:id', single)
router.post('/create', middlewares.validateCreate, create)
router.put('/modify/:id', modify)

module.exports = router
