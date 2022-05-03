const express = require('express');
const isAuth = require('../util/is-auth.js');
const router = express.Router();

const user_controller = require('../controllers/user_controller');

router.get('/login', user_controller.get_login);
router.post('/login', user_controller.login);
router.get('/logout', user_controller.logout);
router.get('/cont', isAuth,user_controller.cont);
router.get('/signup', user_controller.get_signup);
router.post('/signup', user_controller.post_signup);
router.get('/', isAuth, user_controller.root);

module.exports = router;