const express = require('express');
const router = express.Router();
const closetCtrl = require('../controllers/closet');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', closetCtrl.index);

router.get('/new', ensureLoggedIn, closetCtrl.new);

router.post('/', ensureLoggedIn, closetCtrl.create);

router.get('/:id',ensureLoggedIn, closetCtrl.show);


module.exports = router;