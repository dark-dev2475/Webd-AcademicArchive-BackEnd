const express = require("express");
const cors = require("cors");
const { login } = require("../controllers/login");

const router = express.Router();

// Apply CORS middleware to the entire router
router.use(cors());

router.post("/login", login);

module.exports = router;
