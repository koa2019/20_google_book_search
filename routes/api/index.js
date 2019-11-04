const router = require("express").Router();
const bookRoutes = require('./bookRoutes');
const apiRoutes = require('./apiRoutes');

// Book routes
router.use('/books', bookRoutes);

// api Routes
router.use('/googleBooks', apiRoutes);

module.exports = router;
