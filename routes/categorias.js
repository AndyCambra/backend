const express = require("express");
const router = express.Router();
const service = require("./../models/categorias");

const all = (req, res) =>
  service
    .getAll()
    .then((response) => res.json(response))
    .catch((e) => res.status(500).json(e));

const create = (req, res) =>
  service
    .create(req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e));

const modify = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e));

router.get("/all", all);
router.post("/create", create);
router.put("/modify/:id", modify);

module.exports = router;
