// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "rm63jdru53877l5b",
  password: "z2waq94mrdag6lds",
  database: "ekvr5mb47ynfcq2s"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
