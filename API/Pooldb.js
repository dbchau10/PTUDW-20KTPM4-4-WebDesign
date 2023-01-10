const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "postgrespw",
    host: "host.docker.internal",
    port: 49153,
    database: "postgres"
});

module.exports = pool;