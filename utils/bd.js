const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 8889,
    pool: { min: 1, max: 10 },
  },
});
// exporto el obejeto knex como referencia de la conexion
module.exports = knex;
