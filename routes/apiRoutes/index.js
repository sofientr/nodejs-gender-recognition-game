const router = require('express').Router();
const scoreRoutes = require('./namesRoutes');

router.use(scoreRoutes);

module.exports = router;