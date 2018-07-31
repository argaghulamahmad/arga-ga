const express = require("express");
const port = process.env.PORT || 8080;
const app = express();
var compression = require('compression'); //import to express app

app.use(compression());//add this as the 1st middleware
app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res) {
  res.sendFile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log("Server started...");
