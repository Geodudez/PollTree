const express = require("express");

const controller = require("../controllers/controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("Welcome to pollTree");
});

router.get("/getAllData", controller.getAllData, (req, res) => {
  res
    .status(200)
    .json({
      vue: res.locals.vue,
      d3: res.locals.d3,
      express: res.locals.express,
      mySQL: res.locals.mySQL,
      webpack: res.locals.webpack,
    });
});

router.post("/pollResponse", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
