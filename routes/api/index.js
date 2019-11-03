const router = require('express').Router();
const bookRoutes = require('/books');

// declare book routes path
router.use('/books', bookRoutes);

module.exports = router;