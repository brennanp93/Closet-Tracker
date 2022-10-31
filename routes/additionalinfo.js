const express = require('express');
const ensureLoggedIn = require('../config/ensureLoggedIn');
const router = express.Router();
const additionalInfoCtrl = require('../controllers/additionalinfo');

router.post('/closet/:id/additionalinfo', ensureLoggedIn, additionalInfoCtrl.create);

module.exports = router;