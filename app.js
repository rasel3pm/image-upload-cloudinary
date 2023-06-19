const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const router = require("./src/router/fileUpload");

//Security Middleware implement
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limiter: "50mb" }));
app.use(express.json());
app.use(router);
app.use("*", (req, res) => {
  res.status(404).json({ status: "Page not found,Please check Url" });
});

module.exports = app;
