const router = require('express').Router();
const usersRoutes = require('./usersRoutes');
const reflectionsRoutes = require('./reflectionsRoutes');
const authentication = require('../middlewares/authentication');
const errorMiddleware = require('../middlewares/error-middleware');


router.use('/api/v1/users', usersRoutes);
router.use(authentication);
router.use('/api/v1/reflections', reflectionsRoutes);

router.use((req, res, next) => {
    next({ name: 'PageNotFound' });
});

router.use(errorMiddleware);

module.exports = router;