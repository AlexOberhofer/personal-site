const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/gnuboy", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/projects", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8888);
