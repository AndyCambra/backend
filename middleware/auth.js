const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");
const jwt = require("jsonwebtoken");

const secured = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { id } = jwt.verify(authorization, privateKey);
    req.id = id;
    next();
  } catch (e) {
    res.sendStatus(401);
  }
};

module.exports = { secured };
