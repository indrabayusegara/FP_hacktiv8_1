const Pool = require("pg").Pool; 

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'DB_FP_1',
    password: '',
    port: 4000,
  });  

module.exports = pool;