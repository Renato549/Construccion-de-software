const express = require('express');
const isAuth = require('../util/is-auth');
const router = express.Router();

const Ent_V = require('../controllers/EntA_controller');

//Para artistas
router.get('/new_cant',isAuth, Ent_V.get_newcant);
router.post('/new_Cant', Ent_V.post_newcant);

//Para bandas
router.get('/newband',isAuth, Ent_V.get_newband);
router.post('/newBand', Ent_V.post_newband);

router.use('/', isAuth,Ent_V.root);

module.exports = router;