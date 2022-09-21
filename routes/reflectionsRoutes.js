const UsersController = require('../controller/users-controller');

const router = require('express').Router();

router.post('/', UsersController.reflectionDataAdd);

router.get('/', UsersController.reflectionAllData);

router.put('/:id', UsersController.reflectionDataUpdate);

router.delete('/:id', UsersController.reflectionDataDelete);


module.exports = router;