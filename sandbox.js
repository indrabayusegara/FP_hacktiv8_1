if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const data = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
}

console.log(data)