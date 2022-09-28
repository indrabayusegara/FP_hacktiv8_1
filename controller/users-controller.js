const { sign } = require("../helpers/jwt");
const User = require("../models/users");


class UsersController {

    static registerUser(req, res, next) { 
        const {email, password} = req.body; 
        User.register(email, password) 
        .then((data) => {
            res.status(201).json({id: data.id, email: data.email})    
        })
        .catch((error) => { 
        next(error);
        });    
    }

    static loginUser(req, res, next) {
       const {email, password} = req.body; 
       User.login(email, password) 
       .then((data) => { 
        const token = sign({id: data.id, email: data.email})
        res.status(201).json({token});
       })
       .catch((error) => {
        console.log(error);
        next(error);
       });
    }

}


module.exports = UsersController;