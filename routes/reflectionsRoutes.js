const ReflectionsController = require('../controller/reflections-controller');

const router = require('express').Router();

router.post('/', ReflectionsController.reflectionDataAdd);

router.get('/', ReflectionsController.reflectionAllData);

router.put('/:id', ReflectionsController.reflectionDataUpdate);

router.delete('/:id', ReflectionsController.reflectionDataDelete);


module.exports = router;