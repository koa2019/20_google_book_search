const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);

// router.get("/api/googleBooks/:query", (req, res) => {
//     console.log(req.params.query)
//     // res.send(req.params.query);
// })

// If no API routes are hit, send the React app
// router.use((req, res) => {res.sendFile(path.join(__dirname, "../client/build/index.html"));});

module.exports = router;
