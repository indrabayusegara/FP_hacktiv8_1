const users = require('./../models/users');
const pool = require('./../config/config')

class UsersController {

    static registerUser(req, res) {
        res.status(200).json({ message: "register users" })
    }

    static loginUser(req, res) {
        res.status(200).json({ message: "login users" })
    }

    static reflectionDataAdd(req, res) {
        res.status(200).json({ message: "add reflections" })
    }

    static async reflectionAllData(req, res) {
        pool.query(`SELECT * FROM "Reflections"`, (err, result)=>{
        if(err) throw err
        const reflections = result.rows
        res.status(200).json(reflections)
        })

    }

    static reflectionDataUpdate(req, res) {
        res.status(200).json({ message: "reflections update" })
    }

    static reflectionDataDelete(req, res) {
        res.status(200).json({ message: "reflections delete" })
    }

}


module.exports = UsersController;