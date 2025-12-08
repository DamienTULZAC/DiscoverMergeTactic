// backend/routeur/router.js
const express = require('express');
const router = express.Router();

// Import des sous-routeurs
const rulersRouter = require('./rulersRoutes');
const cardsRouter = require('./cardsRoutes');

router.use('/rulers', rulersRouter);
router.use('/cards', cardsRouter);

module.exports = router;
