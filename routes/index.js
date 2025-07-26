// index.js
const express = require("express");
const router = express.Router();

// Import route 
const CityRoutes = require("./city");

router.use("/city", CityRoutes);

module.exports = router;    