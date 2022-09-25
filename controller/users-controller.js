const { sign } = require("../helpers/jwt");
const User = require("../models/users");


class UsersController {
 
    //Register User
    static registerUser(req, res) { 
        const {email, password} = req.body;  
        User.register(email, password) 
        .then((data) => {
            res.status(201).json({id: data.id, email: data.email})    
        }).catch((err) => {  
            console.log(err.message); 
            if (err.name === "error") { 
                res.status(500).json({ message: "Email already in use" });  
            } else { 
                res.status(401).json({ message : 'internal server error'});
            }
        });
    } 

    //Login User
    static loginUser(req, res) {
       const {email, password} = req.body; 
       User.login(email, password) 
       .then((data) => { 
        const token = sign({id: data.id, email: data.email})
        res.status(201).json(token);
       }).catch((err) => {
        if (err.name === 'UserNotFound' || err.name === 'WrongPassword') { 
            res.status(401).json({ message : 'User not Found or Wrong Password'});
        } else {  
            console.log(err);
            res.status(401).json({ message : 'internal server error'});
        }
       });
    }
}


module.exports = UsersController;