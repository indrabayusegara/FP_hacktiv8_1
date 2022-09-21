const UsersController = require('../controller/users-controller');

const router = require('express').Router();

router.post('/api/v1/users/register', UsersController.registerUser); 
 
router.post('/api/v1/users/login', UsersController.loginUser); 
 
router.post('/api/v1/reflections', UsersController.reflectionDataAdd); 
 
router.get('/api/v1/reflections', UsersController.reflectionDataById); 
 
router.put('/api/v1/reflections/:id', UsersController.reflectionDataUpdate); 
 
router.delete('/api/v1/reflections/:id', UsersController.reflectionDataDelete);


module.exports = router;