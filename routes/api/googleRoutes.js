const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// routes to google api query. Matches /api/googleBooks/
// router.route('/googleBooks')
router.route('/googleBooks')
    .get(googleController.getGoogle)

module.exports = router;
