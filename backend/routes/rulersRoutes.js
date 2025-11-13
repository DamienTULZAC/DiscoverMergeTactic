const express = require('express');
const router = express.Router();
const rulersController = require('../controllers/rulersControler');

router.get('/', rulersController.getAllRulers);

module.exports = router;