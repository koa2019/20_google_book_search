const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// routes to google api query. Matches /api/googleBooks/:query
router.get('/:query',googleController.getGoogle);

module.exports = router;
