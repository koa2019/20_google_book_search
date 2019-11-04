const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// routes to google api query. Matches /api/googleBooks/
router.route('/')
    .get(googleController.searchGoogle)

module.exports = router;
