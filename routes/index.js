var router = require('koa-router')();

const home = require('./home');
const users = require('./users');

router.use('/index', home.routes(), home.allowedMethods());
router.use('/users', users.routes(), users.allowedMethods());


module.exports = router