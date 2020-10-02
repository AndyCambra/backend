const express = require("express");
const router = express.Router();

const getProfile = (req, res) => {
  res.json({ message: "welcome" });
};

router.get("/perfil", getProfile);
module.exports = router;
