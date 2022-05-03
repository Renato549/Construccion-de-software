
const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();

const EntV = require('../controllers/EntV_controller');

//Para películas
router.get('/newMo', isAuth,EntV.get_newMo);
router.post('/newMo', EntV.post_newMo);
router.get('/:idPelicula', isAuth,EntV.getMo);

//Para series
router.get('/newSe', isAuth,EntV.get_newSe);
router.post('/newSe', EntV.post_newSe);


router.use('/', isAuth,EntV.root);

module.exports = router;