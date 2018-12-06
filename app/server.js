var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;
app.get("/profile", function(req, res) {
  res.json({
    name: "Ivana"
  });
});
app.listen(port, function() {
  console.log("App Listening on Port 3000");
});
