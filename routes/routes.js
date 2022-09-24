const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const reflectionsRoutes = require('./reflectionsRoutes');
const authentication = require('../middlewares/authentication');


router.use('/api/v1/users', usersRoutes);
router.use(authentication);
router.use('/api/v1/reflections', reflectionsRoutes);

module.exports = router;