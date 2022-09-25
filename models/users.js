const pool = require("../config/config");
const { compare } = require("../helpers/hash"); 
const { hash } = require("../helpers/hash");

class User{
    constructor(id, email, password) {  
        this.id = id;
        this.email = email; 
        this.password = password;
    } 
      
    //Models Register User
    static register(email, password) {   
        return new Promise((resolve, reject) => {   
            password = hash(password);
            pool.query(` 
            INSERT INTO users(email, password) 
            VALUES ($1, $2) 
            RETURNING *;
        `, [email, password]
        )
        .then(({rows}) => {
            console.log(rows[0]);  
            const user = new User(rows[0].id, rows[0].email, rows[0].password);
            resolve(user);
        }).catch((err) => {
            reject(err);
        }); 
        });
    }  
      
    //Models Login User
    static login(email, password) {  
        return new Promise((resolve, reject) => {  
            pool.query(` 
            SELECT  id ,email, password  
            FROM users 
            WHERE email=$1;
        `, [email]
        )
        .then(({rows}) => {
            if (!rows.length) throw {name : "UserNotFound"}; 
            if (!compare(password, rows[0].password)) throw { name : "WrongPassword"};

            const user = new User(rows[0].id, rows[0].email, rows[0].password);
            resolve(user);
        }).catch((err) => {
            reject(err);
        }); 
        });
    } 
}


module.exports = User