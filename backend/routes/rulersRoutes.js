const express = require('express');
const router = express.Router();
const rulersController = require('../controllers/rulersControler');

router.get('/', rulersController.getAllRulers);
router.get('/:id', rulersController.getRulerById);

module.exports = router;