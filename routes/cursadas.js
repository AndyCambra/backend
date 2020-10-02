const express = require("express");
const router = express.Router();
const service = require("./../models/cursadas");
const { validateCreate } = require("./../middleware/cursadas");
const create = (req, res) =>
  service
    .create(req.body)
    .then((r) => res.json(r))
    .catch((error) => response.status(500).json(error));

const all = (req, res) =>
  service
    .all()
    .then((r) => res.json(r))
    .catch((e) => res.status(500).json(e));

const single = (req, res) =>
  service
    .single(req.params.id)
    .then(([r]) => res.json(r))
    .catch((e) => res.status(500).json(e));

const modify = (req, res) =>
  service
    .modify(req.params.id, req.body)
    .then((response) => res.json(response))
    .catch((e) => res.json(e));

router.get("/all", all);
router.get("/single/:id", single);
router.post("/create", validateCreate, create);
router.put("/modify/:id", modify);

module.exports = router;
