const { verify } = require("../helpers/jwt");

function authentication(req, res, next) {
    try{
        const { authorization } = req.headers;
        const token = authorization.split("Bearer ");
        if (token.length !== 2) throw { name: 'invalidToken' };
        const { id, email } = verify(token[1]);
        req.user = { id, email };
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: 'unauthorized' });
    }
}

module.exports = authentication;