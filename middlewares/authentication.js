const pool = require("../config/config");
const { verify } = require("../helpers/jwt");

async function authentication(req, res, next) {
    // try{
    //     const { authorization } = req.headers;
    //     if (!authorization) throw { name: 'NoAuthorization' };
    //     const token = authorization.split("Bearer ");
    //     if (token.length !== 2) throw { name: 'InvalidToken' };
    //     const { id, email } = verify(token[1]);
    //     req.user = { id, email };
    //     next();
    // } catch (error) {
    //     next(error);
    // }

    try {
        const token = req.headers["x-access-token"]
        if (!token) throw {name: 'NoAuthorization'}

        const { id, email } = verify(token);
        const users = await pool.query('select * from users where id=$1 and email=$2',[id, email])

        if(!users.rows[0]) throw {name:'Unauthorized'}
        req.user = {id, email}

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authentication;