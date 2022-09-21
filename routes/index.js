const reflectionsRoutes = require('./reflectionsRoutes')
const usersRoutes = require('./usersRoutes')
const router = require('express').Router();

router.use('/api/v1/users', usersRoutes)
router.use('/api/v1/reflections', reflectionsRoutes)


module.exports = router;