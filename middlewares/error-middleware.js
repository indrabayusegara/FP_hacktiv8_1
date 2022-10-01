function errorMiddleware(error, req, res, next) {
    let code = 500;
    let message = 'internal server error';

    if (error.name === 'JsonWebTokenError') {
        code = 401;
        message = 'invalid token';
    } else if (error.name === 'InvalidToken') {
        code = 401;
        message = 'invalid token';
    } else if (error.name === 'error') {
        code = 401;
        message = 'Email already exists';
    } else if (error.name === 'UserNotFound' || error.name === 'WrongPassword') { 
        code = 401;
        message = 'Email not Found or Wrong Password';
    } else if (error.name === 'cantUpdated') {
        code = 400;
        message = 'Data Reflections can not Updated';
    } else if(error.name === 'cantDeleted') {
        code = 400;
        message = 'Data Reflections can not Deleted';
    } else if (error.name === 'PageNotFound') {
        code = 404;
        message = 'Oops... nothing here';
    } 
    return res.status(code).json({message});
}

module.exports = errorMiddleware;