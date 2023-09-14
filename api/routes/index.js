const router = require('express').Router();

router.use('/account', require('./user/controller'));

module.exports = router

