const express = require("express");
const router = express.Router();
const widthController = require("../controllers/widthController");

// POST route to create a new width
router.post("/width", widthController.createWidth);

// GET route to retrieve the latest width
router.get("/width", widthController.getAllWidths);

module.exports = router;
