const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "Bahubali@2311",
    host: "localhost",
    port: 5432,
    database: "perntodo"
});

module.exports = pool;