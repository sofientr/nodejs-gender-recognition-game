const router = require('express').Router();
const scoreRoutes = require('./scoreRoutes');

router.use(scoreRoutes);

module.exports = router;