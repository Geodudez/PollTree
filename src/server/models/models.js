const { Pool } = require("pg");

const PG_URI =
  "postgres://lqasiifq:5r5IGJMNDiWOTxDILfSlV6mesd6NIAEs@batyr.db.elephantsql.com/lqasiifq"; 


// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};