const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const sha1 = require("sha1");
const publicKey = fs.readFileSync("./keys/public.pem");
const singOptions = { algorithm: "RS256", expiresIn: "2h" };
const service = require("./../models/auth");

const createToken = (payload) => jwt.sing(payload, publicKey, singOptions);

const auth = async (req, res) => {
  try {
    const { usuario, password } = req.body;
    const [user] = await service.authenticate(usuario, sha1(password));
    if (!user) res.sendStatus(401);
    // user.habilitado --> condición por omisión
    if (!user.habilitado)
      res.status(401).json({ message: "Confirma tu cuenta para seguir" });
    if (user.habilitado) {
      //creo el token
      //ssr retorma <html> server side rendering
      const token = createToken({ id: user.id, role: "usuario" });
      res.json({ JWT: token, info: { usuario } });
      //info: datos publicos para mostrar en vistas
    }
  } catch (e) {
    res.sendStatus(500);
  }
};

router.post("/", auth);

module.exports = router;
