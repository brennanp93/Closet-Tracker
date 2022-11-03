const express = require('express');
const router = express.Router();
const closetCtrl = require('../controllers/closet');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', closetCtrl.index);

router.get('/new', ensureLoggedIn, closetCtrl.new);

router.get('/:id', ensureLoggedIn, closetCtrl.show);

router.post('/', ensureLoggedIn, closetCtrl.create);

router.get('/:id/edit', closetCtrl.edit);

router.put('/:id', ensureLoggedIn, closetCtrl.update);

module.exports = router;