
const pool = require('./../config/config')

class UsersController {

    static registerUser(req, res) {
        res.status(200).json({ message: "register users" })
    }
    static loginUser(req, res) {
        res.status(200).json({ message: "login users" })
    }

}


module.exports = UsersController;