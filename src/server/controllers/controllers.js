const db = require("../models/models");
const pollController = {};

pollController.registration = async (req, res, next) => {
  const { username, password } = req.body;
  const params = [username, password];
  const queryString = `INSERT INTO employers VALUES ($1, $2)`;
  try {
    const result = await db.query(queryString, params);
  } catch (e) {
    console.log(`Error in pollController.registration: ${e}`);
  }
  return next;
};

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
    user_id,
    tech,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
  } = req.body;

  const params = [
    user_id,
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
  ];
  
  const insertString = `INSERT INTO ${tech} VALUES($1, $2, $3, $4, $5, $6, $7)`;
  try {
    const result = await db.query(insertString, params);
    res.locals.result = result;
  } catch (e) {
    console.log(`Error in pollController.insertData: ${e}`);
  }
  return next();
};

module.exports = pollController;
