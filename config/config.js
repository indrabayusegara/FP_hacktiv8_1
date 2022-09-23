const {Pool} = require("pg") 

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,

    // user: 'postgres',
    // host: 'localhost',
    // database: 'DB_FP_1',
    // password: '1234',
    // port: 5432,
  });  

module.exports = pool;