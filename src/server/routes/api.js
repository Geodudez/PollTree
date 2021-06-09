const express = require("express");

const controller = require("../controllers/controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Welcome to Pollerizer");
});

module.exports = router;
