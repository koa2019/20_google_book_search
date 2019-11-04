const router = require("express").Router();
const bookRoutes = require('./bookRoutes');
const googleRoutes = require('./googleRoutes');

// Book database routes. Matches /api/books
router.use('/books', bookRoutes);

// api Google Routes. Matches /api/googleBooks
router.use('/googleBooks', googleRoutes);

module.exports = router;
