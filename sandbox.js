const pool = require('./config/config')

// const res = await pool.query(`select * from "Reflections"`)
// await pool.end()

pool.query(`select * from "Reflections"`, (err, res) => {
    console.log(err, res.rows)
    pool.end()
})

class Tes{
    s
}