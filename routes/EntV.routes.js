const express = require('express');
const router = express.Router();

const visualController = require('../controllers/EntV_controller');

router.get('/newMo', visualController.get_newP);
router.post('/newMo', visualController.post_newS);

router.get('/newSe', visualController.get_newS);
router.post('/newSe', visualController.post_newS);

router.use('/', visualController.main);

module.exports = router;