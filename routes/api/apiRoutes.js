const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// routes to google api query
router.route('/')
    .get(googleController.searchGoogle)

module.exports = router;
