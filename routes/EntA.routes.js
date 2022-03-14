const express = require('express');
const router = express.Router();

const visualController = require('../controllers/EntA_controller');


router.get('/newCant', visualController.get_newC);
router.post('/newCant', visualController.post_newB);

router.get('/newBand', visualController.get_newB);
router.post('/newBand', visualController.post_newB);

router.use('/', visualController.main);

module.exports = router;