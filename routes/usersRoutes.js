const UsersController = require('../controller/users-controller');

const router = require('express').Router();

router.post('/register', UsersController.registerUser);

router.post('/login', UsersController.loginUser);



module.exports = router;