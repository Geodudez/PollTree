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

pollController.insertData = async (req, res, next) => {
  const {
    username,
    tech,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
  } = req.body;

  const params = [
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
  ];
  const queryString = `SELECT user_id FROM employees WHERE username = '${username}'`;
  const result = await db.query(queryString);
  // console.log("req.body in insertData", req.body);
  // console.log("userId", result.rows[0].user_id);
  const userID = result.rows[0].user_id;
  const insertString = `INSERT INTO ${tech} VALUES($1, $2, $3, $4, $5, $6, ${userID})`;
  try {

  const result = await db.query(insertString, params);
  res.locals.result = result
  }catch(e){
    console.log(`Error in pollController.insertData: ${e}`);
  }
  return next();
};

module.exports = pollController;
