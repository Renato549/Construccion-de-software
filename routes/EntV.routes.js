
const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();

const EntV = require('../controllers/EntV_controller');


router.get('/newmo', isAuth,EntV.get_newMo);
router.post('/newMo', EntV.post_newMo);
router.get('/:idMo', isAuth,EntV.getMo);


router.get('/newse', isAuth,EntV.get_newSe);
router.post('/newSe', EntV.post_newSe);


router.use('/', isAuth,EntV.root);

module.exports = router;