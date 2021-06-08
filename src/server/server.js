const express = require("express");
const path = require("path");
const app = express();
const apiRouter = require("./routes/api");
const passport = require("passport");
require("./passport");

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.use((req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

//passport configuration - initialize to initialize Passport, session for persistent login sessions
app.use(passport.initialize());
app.use(passport.session());

const userLoggedIn = (req, res, next) => {
  req.user ? next() : res.sendStatus(401);
};

//sign

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Servin' it up on ${PORT}`);
});

module.exports = app;
