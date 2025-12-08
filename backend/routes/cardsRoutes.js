const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cardsController');

router.get('/', cardsController.getAllCards);
router.get('/:id', cardsController.getCardById);

module.exports = router;