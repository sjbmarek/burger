var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  // port: 3001,
  user: "root",
  password: "jaynezoe",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
