const db = require("../models/models");
const pollController = {};

pollController.getAllData = async (req, res, next) => {
  const queryStringVue = "SELECT * FROM vue";
  const queryStringD3 = "SELECT * FROM d3";
  const queryStringExpress = "SELECT * FROM express";
  const queryStringMySQL = "SELECT * FROM mysql";
  const queryStringWebpack = "SELECT * FROM webpack";
  try {
    const result = await db.query(queryStringVue);
    res.locals.vue = result;
    const resultd3 = await db.query(queryStringD3);
    res.locals.d3 = resultd3;
    const resultExpress = await db.query(queryStringExpress);
    res.locals.express = resultExpress;
    const resultMySQL = await db.query(queryStringMySQL);
    res.locals.mySQL = resultMySQL;
    const resultWebpack = await db.query(queryStringWebpack);
    res.locals.webpack = resultWebpack;
  } catch (e) {
    console.log(`Error in pollController.getAllData: ${e}`);
  }
  return next();
};

pollController.insertData = (req, res, next) => {
  const queryString = "";
  console.log("res in insertData", res);
};

module.exports = pollController;
